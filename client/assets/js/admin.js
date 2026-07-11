checkAuth();

const user = getUser();

if (!user || user.role !== "admin") {
    alert("Access Denied!");
    window.location.href = "index.html";
}

async function loadDashboard() {

    const token = localStorage.getItem("token");

    try {

        const response = await fetch(
            "http://localhost:5000/api/admin/dashboard",
            {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }
        );

        const data = await response.json();

        if (data.success) {

            document.getElementById("userCount").innerText =
                data.totalUsers;

            document.getElementById("bookingCount").innerText =
                data.totalBookings;

            document.getElementById("wishlistCount").innerText =
                data.totalWishlist;

            document.getElementById("reviewCount").innerText =
                data.totalReviews;

            document.getElementById("contactCount").innerText =
                data.totalContacts;

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.error(err);

        alert("Unable to load dashboard.");

    }

}

// Load Analytics
async function loadAnalytics() {

    const token = localStorage.getItem("token");

    try {

        const response = await fetch(
            "http://localhost:5000/api/admin/analytics",
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );

        const data = await response.json();

        if (!data.success) return;

        // Monthly Booking Chart
        new Chart(document.getElementById("bookingChart"), {

            type: "bar",

            data: {

                labels: [
                    "Jan","Feb","Mar","Apr","May","Jun",
                    "Jul","Aug","Sep","Oct","Nov","Dec"
                ],

                datasets: [{

                    label: "Bookings",

                    data: data.monthlyBookings

                }]

            }

        });

        // Average Rating
        document.getElementById("avgRating").innerText =
        data.averageRating + " ⭐";

    } catch (err) {

        console.error(err);

    }

}

loadDashboard();
loadAnalytics();