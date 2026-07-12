checkAuth();

const token = localStorage.getItem("token");

async function loadBookings() {

    const res = await fetch(
        "https://goexplore-jharkhand.onrender.com/api/bookings",
        {
            headers: {
                Authorization: "Bearer " + token
            }
        }
    );

    const data = await res.json();

    const container = document.getElementById("bookingContainer");

    container.innerHTML = "";

    data.bookings.forEach(booking => {

        container.innerHTML += `
        <div class="card">

            <h2>${booking.place}</h2>

            <p><b>User:</b> ${booking.user.name}</p>

            <p><b>Email:</b> ${booking.user.email}</p>

            <p><b>Date:</b> ${booking.date}</p>

            <p><b>Persons:</b> ${booking.persons}</p>

            <p><b>Phone:</b> ${booking.phone}</p>

            <p><b>Payment:</b> ${booking.paymentStatus}</p>

            <p><b>Status:</b> ${booking.status}</p>

            <button
                class="btn approve"
                onclick="approveBooking('${booking._id}')">

                Approve

            </button>

        </div>
        `;
    });

}

async function approveBooking(id){

    await fetch(
        "https://goexplore-jharkhand.onrender.com/api/bookings/" + id + "/approve",
        {
            method:"PUT",
            headers:{
                Authorization:"Bearer "+token
            }
        }
    );

    loadBookings();

}

loadBookings();