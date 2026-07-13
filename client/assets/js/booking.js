checkAuth();

const user = getUser();

document.getElementById("place").value =
    localStorage.getItem("bookingPlace") || "";

const bookingAmount =
    Number(localStorage.getItem("bookingAmount")) || 0;

document.getElementById("entryFee").innerText =
    "₹" + bookingAmount;

document.getElementById("email").value = user.email;

const personsInput = document.getElementById("persons");

// Update Total Amount
function updateTotal() {

    const persons = Number(personsInput.value) || 1;

    const totalAmount = bookingAmount * persons;

    document.getElementById("bookingAmount").innerText =
        "₹" + totalAmount;
}

personsInput.addEventListener("input", updateTotal);

updateTotal();

const form = document.getElementById("bookingForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const persons = Number(document.getElementById("persons").value) || 1;

    const totalAmount = bookingAmount * persons;

    const booking = {

        place: document.getElementById("place").value,
        date: document.getElementById("date").value,
        persons: persons,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        amount: totalAmount

    };

    try {

        // Create Razorpay Order
        const orderRes = await fetch(
            "https://goexplore-jharkhand.onrender.com/api/payment/create-order",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: totalAmount
                })
            }
        );

        const orderData = await orderRes.json();

        if (!orderData.success) {
            alert("Unable to create payment order.");
            return;
        }

        const options = {

            key: "rzp_test_TCZJtzGujvlzdp",
            amount: orderData.order.amount,
            currency: orderData.order.currency,
            name: "Go-Explore Tourism",
            description: booking.place,
            order_id: orderData.order.id,

            handler: async function (response) {

                try {

                    // Verify Payment
                    const verify = await fetch(
                        "https://goexplore-jharkhand.onrender.com/api/payment/verify",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(response)
                        }
                    );

                    const verifyData = await verify.json();

                    if (!verifyData.success) {
                        alert("Payment verification failed.");
                        return;
                    }

                    const token = localStorage.getItem("token");

                    // Save Booking
                    const bookingRes = await fetch(
                        "https://goexplore-jharkhand.onrender.com/api/bookings",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token
                            },
                            body: JSON.stringify({
                                ...booking,
                                paymentId: response.razorpay_payment_id,
                                paymentStatus: "Paid"
                            })
                        }
                    );

                    const bookingData = await bookingRes.json();

                    if (bookingData.success) {

                        alert("✅ Payment Successful! Booking Confirmed.");

                        localStorage.removeItem("bookingPlace");
                        localStorage.removeItem("bookingAmount");

                        window.location.href = "my-bookings.html";

                    } else {

                        alert(bookingData.message);

                    }

                } catch (err) {

                    console.error(err);
                    alert("Payment verification failed.");

                }

            },

            theme: {
                color: "#16a34a"
            }

        };

        const rzp = new Razorpay(options);

        rzp.open();

    } catch (err) {

        console.error(err);
        alert("Unable to start payment.");

    }

});