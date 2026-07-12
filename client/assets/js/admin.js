checkAuth();

const user = getUser();

if (!user || user.role !== "admin") {
    alert("Access Denied!");
    window.location.href = "index.html";
}

const token = localStorage.getItem("token");

async function loadDashboard() {

    try {

        const response = await fetch(
            "https://goexplore-jharkhand.onrender.com/api/admin/dashboard",
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );

        const data = await response.json();

        if (!data.success) {
            alert(data.message);
            return;
        }

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

    } catch (err) {

        console.error(err);
        alert("Unable to load dashboard.");

    }

}

async function loadAnalytics() {

    try {

        const response = await fetch(
            "https://goexplore-jharkhand.onrender.com/api/admin/analytics",
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );

        const data = await response.json();

        if (!data.success) return;

        document.getElementById("avgRating").innerText =
            data.averageRating + " ⭐";

        const ctx = document.getElementById("bookingChart");

        new Chart(ctx, {

            type: "bar",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],

                datasets: [{

                    label: "Monthly Bookings",

                    data: data.monthlyBookings,

                    backgroundColor: "#16a34a",

                    borderColor: "#15803d",

                    borderWidth: 1

                }]

            },

            options: {

                responsive: true,

                plugins: {

                    legend: {

                        display: true

                    }

                },

                scales: {

                    y: {

                        beginAtZero: true

                    }

                }

            }

        });

    } catch (err) {

        console.error(err);

    }

}

function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "login.html";

}

loadDashboard();
loadAnalytics();