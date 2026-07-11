checkAuth();

const user = getUser();

if (!user || user.role !== "admin") {

    alert("Access Denied");

    window.location.href = "index.html";

}

let reviews = [];

// Load Reviews
async function loadReviews() {

    const token = localStorage.getItem("token");

    try {

        const response = await fetch(
            "http://localhost:5000/api/admin/reviews",
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );

        const data = await response.json();

        if (data.success) {

            reviews = data.reviews;

            displayReviews(reviews);

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.error(err);

        alert("Unable to load reviews.");

    }

}

// Display Reviews
function displayReviews(list) {

    const table = document.getElementById("reviewTable");

    table.innerHTML = "";

    if (list.length === 0) {

        table.innerHTML = `
        <tr>
            <td colspan="6">No Reviews Found</td>
        </tr>
        `;

        return;

    }

    list.forEach(r => {

        table.innerHTML += `

        <tr>

            <td>${r.user?.name || "-"}</td>

            <td>${r.place}</td>

            <td>⭐ ${r.rating}</td>

            <td>${r.review}</td>

            <td>${new Date(r.createdAt).toLocaleDateString()}</td>

            <td>

                <button onclick="deleteReview('${r._id}')">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

}

// Search
function searchReviews() {

    const keyword = document
        .getElementById("searchReview")
        .value
        .toLowerCase();

    const filtered = reviews.filter(r =>

        (r.place &&
            r.place.toLowerCase().includes(keyword))

        ||

        (r.user &&
            r.user.name &&
            r.user.name.toLowerCase().includes(keyword))

    );

    displayReviews(filtered);

}

// Delete
async function deleteReview(id) {

    if (!confirm("Delete this review?")) return;

    const token = localStorage.getItem("token");

    const response = await fetch(

        "http://localhost:5000/api/admin/reviews/" + id,

        {

            method: "DELETE",

            headers: {

                Authorization: "Bearer " + token

            }

        }

    );

    const data = await response.json();

    if (data.success) {

        alert("Review deleted successfully.");

        loadReviews();

    } else {

        alert(data.message);

    }

}

loadReviews();