checkAuth();

const user = getUser();

document.getElementById("place").value =
    localStorage.getItem("bookingPlace") || "";

document.getElementById("email").value = user.email;

const form = document.getElementById("bookingForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const token = localStorage.getItem("token");
    console.log("Token:", token);

    const booking = {
        place: document.getElementById("place").value,
        date: document.getElementById("date").value,
        persons: document.getElementById("persons").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value
    };

    try {

        const response = await fetch("http://localhost:5000/api/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(booking)
        });

        console.log("Status:", response.status);

        const data = await response.json();
        console.log("Response:", data);

        if (data.success) {
            alert("Booking Successful!");
            window.location.href = "my-bookings.html";
        } else {
            alert(data.message);
        }

    } catch (err) {
        console.error(err);
        alert("Request failed.");
    }

});