checkAuth();

const user = getUser();

if (!user || user.role !== "admin") {

    alert("Access Denied");

    window.location.href = "index.html";

}

let wishlist = [];

// Load Wishlist
async function loadWishlist() {

    const token = localStorage.getItem("token");

    try {

        const response = await fetch(
            "http://localhost:5000/api/admin/wishlist",
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );

        const data = await response.json();

        if (data.success) {

            wishlist = data.wishlist;

            displayWishlist(wishlist);

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.error(err);

        alert("Unable to load wishlist.");

    }

}

// Display Wishlist
function displayWishlist(list) {

    const table = document.getElementById("wishlistTable");

    table.innerHTML = "";

    if (list.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="4">No Wishlist Items Found</td>
            </tr>
        `;

        return;

    }

    list.forEach(item => {

        table.innerHTML += `

        <tr>

            <td>${item.user?.name || "-"}</td>

            <td>${item.place}</td>

            <td>${new Date(item.createdAt).toLocaleDateString()}</td>

            <td>

                <button onclick="deleteWishlist('${item._id}')">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

}

// Search Wishlist
function searchWishlist() {

    const keyword = document
        .getElementById("searchWishlist")
        .value
        .toLowerCase();

    const filtered = wishlist.filter(item =>

        (item.place &&
        item.place.toLowerCase().includes(keyword))

        ||

        (item.user &&
        item.user.name &&
        item.user.name.toLowerCase().includes(keyword))

    );

    displayWishlist(filtered);

}

// Delete Wishlist
async function deleteWishlist(id) {

    if (!confirm("Delete this wishlist item?")) return;

    const token = localStorage.getItem("token");

    const response = await fetch(

        "http://localhost:5000/api/admin/wishlist/" + id,

        {

            method: "DELETE",

            headers: {

                Authorization: "Bearer " + token

            }

        }

    );

    const data = await response.json();

    if (data.success) {

        alert("Wishlist item deleted.");

        loadWishlist();

    } else {

        alert(data.message);

    }

}

loadWishlist();