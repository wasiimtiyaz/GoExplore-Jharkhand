checkAuth();

const token = localStorage.getItem("token");

async function loadWishlist() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/wishlist",
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );

        const data = await response.json();

        const container =
            document.getElementById("wishlistContainer");

        if (!data.success || data.wishlist.length === 0) {

            container.innerHTML =
                "<h3>No wishlist items.</h3>";

            return;
        }

        container.innerHTML = "";

        data.wishlist.forEach(item => {

            container.innerHTML += `
            <div class="card">

                <div class="card-content">

                    <h3>${item.place}</h3>

                    <button
                    class="btn register-btn"
                    onclick="removeWishlist('${item._id}')">

                    Remove

                    </button>

                </div>

            </div>
            `;

        });

    } catch (err) {

        console.error(err);

    }

}

async function removeWishlist(id) {

    if (!confirm("Remove from wishlist?")) return;

    const response = await fetch(

        "http://localhost:5000/api/wishlist/" + id,

        {

            method: "DELETE",

            headers: {

                Authorization: "Bearer " + token

            }

        }

    );

    const data = await response.json();

    if (data.success) {

        loadWishlist();

    } else {

        alert(data.message);

    }

}

loadWishlist();