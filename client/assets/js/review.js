checkAuth();

const token = localStorage.getItem("token");
const place = localStorage.getItem("selectedPlace");

// Submit Review
async function submitReview() {

    const rating = document.getElementById("ratingInput").value;
    const review = document.getElementById("reviewInput").value.trim();

    if (review === "") {
        alert("Please write your review.");
        return;
    }

    try {

        const response = await fetch(
            "https://goexplore-jharkhand.onrender.com/api/reviews",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({
                    place,
                    rating,
                    review
                })
            }
        );

        const data = await response.json();

        if (data.success) {

            alert("⭐ Review submitted successfully.");

            document.getElementById("reviewInput").value = "";

            loadReviews();

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.error(err);

        alert("Unable to submit review.");

    }

}

// Load Reviews
// Load Reviews
async function loadReviews() {

    try {

        const response = await fetch(
            "https://goexplore-jharkhand.onrender.com/api/reviews/" +
            encodeURIComponent(place)
        );

        const data = await response.json();

        const container = document.getElementById("reviewContainer");

        if (!data.success || data.reviews.length === 0) {
            container.innerHTML = "<p>No reviews yet.</p>";
            return;
        }

        container.innerHTML = "";

        const currentUser = getUser();

        data.reviews.forEach(r => {

    console.log("Current User:", currentUser);
    console.log("Review User:", r.user);

    let buttons = "";

    if (
        currentUser &&
        r.user &&
        String(currentUser._id || currentUser.id) === String(r.user._id)
    ) {

        buttons = `
            <button class="explore-btn"
                onclick="editReview('${r._id}','${r.rating}',\`${r.review}\`)">
                ✏ Edit
            </button>

            <button class="explore-btn"
                onclick="deleteReview('${r._id}')">
                🗑 Delete
            </button>
        `;
    }


            container.innerHTML += `
                <div class="card">

                    <div class="card-content">

                        <h3>${r.user.name}</h3>

                        <p>⭐ ${r.rating}/5</p>

                        <p>${r.review}</p>

                        <small>${new Date(r.createdAt).toLocaleDateString()}</small>

                        ${buttons}

                    </div>

                </div>
            `;

        });

    } catch (err) {

        console.error(err);

    }

}
// Edit Review
async function editReview(id, oldRating, oldReview) {

    const rating = prompt(
        "Enter Rating (1-5):",
        oldRating
    );

    if (rating === null) return;

    const review = prompt(
        "Edit your review:",
        oldReview
    );

    if (review === null) return;

    const response = await fetch(
        "https://goexplore-jharkhand.onrender.com/api/reviews/" + id,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                rating,
                review
            })
        }
    );

    const data = await response.json();

    if (data.success) {

        alert("Review updated successfully.");

        loadReviews();

    } else {

        alert(data.message);

    }

}

// Delete Review
async function deleteReview(id) {

    if (!confirm("Delete this review?")) return;

    const response = await fetch(
        "https://goexplore-jharkhand.onrender.com/api/reviews/" + id,
        {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
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

// Load reviews on page load
loadReviews();