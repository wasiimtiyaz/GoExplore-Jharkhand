checkAuth();

const user = getUser();

if (!user || user.role !== "admin") {

    alert("Access Denied");

    window.location.href = "index.html";

}

const token = localStorage.getItem("token");

const id = new URLSearchParams(window.location.search).get("id");

// Load Place
async function loadPlace() {

    const response = await fetch(

        "http://localhost:5000/api/admin/places/" + id,

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

    const place = data.place;

    document.getElementById("name").value = place.name;

    document.getElementById("district").value = place.district;

    document.getElementById("category").value = place.category;

    document.getElementById("image").value = place.image;

    document.getElementById("rating").value = place.rating;

    document.getElementById("description").value = place.description;

    document.getElementById("map").value = place.map;

}

document
.getElementById("editPlaceForm")
.addEventListener("submit", updatePlace);

// Update Place
async function updatePlace(e) {

    e.preventDefault();

    const response = await fetch(

        "http://localhost:5000/api/admin/places/" + id,

        {

            method: "PUT",

            headers: {

                "Content-Type": "application/json",

                Authorization: "Bearer " + token

            },

            body: JSON.stringify({

                name: document.getElementById("name").value,

                district: document.getElementById("district").value,

                category: document.getElementById("category").value,

                image: document.getElementById("image").value,

                rating: document.getElementById("rating").value,

                description: document.getElementById("description").value,

                map: document.getElementById("map").value

            })

        }

    );

    const data = await response.json();

    if (data.success) {

        alert("Place updated successfully.");

        window.location.href = "manage-places.html";

    } else {

        alert(data.message);

    }

}

loadPlace();