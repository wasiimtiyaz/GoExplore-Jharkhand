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

        console.log("Status:", orderRes.status);

        const text = await orderRes.text();
        console.log("Response:", text);

        const orderData = JSON.parse(text);

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

                    console.log("Payment Success");
                    console.log(response);

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

                    console.log("Verify:", verifyData);

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
                           body: JSON.stringify({
    ...booking,
    paymentId: response.razorpay_payment_id,
    paymentStatus: "Paid"
})
                        }
                    );

                    const bookingData = await bookingRes.json();

                    console.log("Booking:", bookingData);

                    if (bookingData.success) {

                        alert("✅ Payment Successful! Booking Confirmed.");

                        localStorage.removeItem("bookingPlace");

                        window.location.href = "my-bookings.html";

                    } else {

                        alert(bookingData.message);

                    }

                } catch (err) {

                    console.error("Handler Error:", err);
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

        console.error("Payment Error:", err);
        alert("Unable to start payment.");

    }

});