checkAuth();

const token = localStorage.getItem("token");

async function loadBookings() {

    try {

        const res = await fetch(
            "https://goexplore-jharkhand.onrender.com/api/bookings/my",
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );

        const data = await res.json();

        const container = document.getElementById("bookingContainer");

        if (!data.success || data.bookings.length === 0) {

            container.innerHTML = `
                <h3>No bookings found.</h3>
            `;

            return;
        }

        container.innerHTML = "";

        data.bookings.forEach(booking => {

            let statusColor = "#16a34a";

            if (booking.status === "Cancelled") {
                statusColor = "#dc2626";
            }

            if (booking.status === "Pending") {
                statusColor = "#eab308";
            }

            container.innerHTML += `
    <div class="card">

        <div class="card-content">

            <h2>${booking.place}</h2>

            <hr><br>

            <p><strong>📅 Travel Date:</strong> ${booking.date}</p>

            <p><strong>👥 Persons:</strong> ${booking.persons}</p>

            <p><strong>📞 Phone:</strong> ${booking.phone}</p>

            <p><strong>📧 Email:</strong> ${booking.email}</p>

            <p><strong>💳 Payment:</strong>
<span style="color:green;font-weight:bold;">
${booking.paymentStatus}
</span>
</p>

<p><strong>Payment ID:</strong>
${booking.paymentId}
</p>

            <p>
                <strong>Status:</strong>

                <span
                    style="
                        background:${statusColor};
                        color:white;
                        padding:5px 12px;
                        border-radius:20px;
                    ">
                    ${booking.status}
                </span>

            </p>

            <br>

           ${booking.status === "Cancelled"
                    ?
                    `<button class="btn" disabled>
Cancelled
</button>`
                    :
                    `<button
class="btn register-btn"
onclick="cancelBooking('${booking._id}')">
❌ Cancel Booking
</button>`
                }

        </div>

    </div>
    `;

        });

    } catch (err) {

        console.error(err);

        document.getElementById("bookingContainer").innerHTML =
            "<h3>Unable to load bookings.</h3>";

    }

}

async function cancelBooking(id) {

    const confirmCancel = confirm(
        "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    try {

        const res = await fetch(
            "https://goexplore-jharkhand.onrender.com/api/bookings/" + id,
            {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );

        const data = await res.json();

        if (data.success) {

            alert("Booking cancelled successfully.");

            loadBookings();

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.error(err);

        alert("Unable to cancel booking.");

    }

}

loadBookings();