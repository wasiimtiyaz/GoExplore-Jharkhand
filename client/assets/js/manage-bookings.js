checkAuth();

const user = getUser();

if (!user || user.role !== "admin") {

    alert("Access Denied");

    window.location.href = "index.html";

}

let bookings = [];

// Load All Bookings
async function loadBookings() {

    const token = localStorage.getItem("token");

    try {

        const response = await fetch(
    "http://localhost:5000/api/admin/bookings",
    {
        headers: {
            Authorization: "Bearer " + token
        }
    }
);

console.log("Status:", response.status);

const data = await response.json();

console.log("Response:", data);

        if (data.success) {

            bookings = data.bookings;

            displayBookings(bookings);

        } else {

            alert(data.message);

        }

    } catch (err) {
    console.error(err);
    alert(err.message);
}

}

// Display Bookings
function displayBookings(list) {

    const table = document.getElementById("bookingTable");

    table.innerHTML = "";

    if (list.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="6">No bookings found.</td>
            </tr>
        `;

        return;

    }

    list.forEach(b => {

        table.innerHTML += `

        <tr>

            <td>${b.user?.name || "-"}</td>

            <td>${b.place}</td>

            <td>${new Date(b.date).toLocaleDateString()}</td>

            <td>${b.persons}</td>

            <td>

                <select onchange="changeStatus('${b._id}', this.value)">

                    <option value="Pending"
                    ${b.status === "Pending" ? "selected" : ""}>
                    Pending
                    </option>

                    <option value="Approved"
                    ${b.status === "Approved" ? "selected" : ""}>
                    Approved
                    </option>

                    <option value="Cancelled"
                    ${b.status === "Cancelled" ? "selected" : ""}>
                    Cancelled
                    </option>

                </select>

            </td>

            <td>

                <button onclick="deleteBooking('${b._id}')">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

}

// Search Bookings
function searchBookings() {

    const keyword = document
        .getElementById("searchBooking")
        .value
        .toLowerCase();

    const filtered = bookings.filter(b =>

        (b.place &&
            b.place.toLowerCase().includes(keyword))

        ||

        (b.user &&
            b.user.name &&
            b.user.name.toLowerCase().includes(keyword))

    );

    displayBookings(filtered);

}

// Delete Booking
async function deleteBooking(id) {

    if (!confirm("Delete this booking?")) return;

    const token = localStorage.getItem("token");

    try {

        const response = await fetch(

            "http://localhost:5000/api/admin/bookings/" + id,

            {

                method: "DELETE",

                headers: {

                    Authorization: "Bearer " + token

                }

            }

        );

        const data = await response.json();

        if (data.success) {

            alert("Booking deleted successfully.");

            loadBookings();

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.error(err);

        alert("Unable to delete booking.");

    }

}

// Change Booking Status
async function changeStatus(id, status) {

    const token = localStorage.getItem("token");

    try {

        const response = await fetch(

            "http://localhost:5000/api/admin/bookings/" + id + "/status",

            {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json",

                    Authorization: "Bearer " + token

                },

                body: JSON.stringify({

                    status

                })

            }

        );

        const data = await response.json();

        if (data.success) {

            alert("Booking status updated.");

            loadBookings();

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.error(err);

        alert("Unable to update booking.");

    }

}

// Load Bookings
loadBookings();