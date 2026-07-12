checkAuth();
const user = getUser();
document.getElementById("place").value =
    localStorage.getItem("bookingPlace") || "";
document.getElementById("email").value = user.email;
const form = document.getElementById("bookingForm");
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const booking = {
        place: document.getElementById("place").value,
        date: document.getElementById("date").value,
        persons: document.getElementById("persons").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    };

    try {
        // Create Razorpay Order
        const orderRes = await fetch(
            "https://goexplore-jharkhand.onrender.com/api/payment/create-order",
            {
                method: "POST"
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
            description: "Tour Booking",
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
                    // Save Booking
                    const token = localStorage.getItem("token");
                    const bookingRes = await fetch(
                        "https://goexplore-jharkhand.onrender.com/api/bookings",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer " + token
                            },
                            body: JSON.stringify(booking)
                        }
                    );
                    const bookingData = await bookingRes.json();
                    if (bookingData.success) {
                        alert("✅ Payment Successful! Booking Confirmed.");
                        localStorage.removeItem("bookingPlace");
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