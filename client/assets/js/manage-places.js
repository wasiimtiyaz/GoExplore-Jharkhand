checkAuth();

const user = getUser();

if (!user || user.role !== "admin") {
    alert("Access Denied");
    window.location.href = "index.html";
}

let places = [];

async function loadPlaces() {

    const token = localStorage.getItem("token");

    const response = await fetch(
        "http://localhost:5000/api/admin/places",
        {
            headers: {
                Authorization: "Bearer " + token
            }
        }
    );

    const data = await response.json();

    if (data.success) {

        places = data.places;

        displayPlaces(places);

    } else {

        alert(data.message);

    }

}

function displayPlaces(list) {

    const table = document.getElementById("placeTable");

    table.innerHTML = "";

    list.forEach(place => {

        table.innerHTML += `

        <tr>

            <td>${place.name}</td>

            <td>${place.district}</td>

            <td>${place.category}</td>

            <td>${place.rating}</td>

            <td>

                <button onclick="editPlace('${place._id}')">
                    ✏️ Edit
                </button>

                <button onclick="deletePlace('${place._id}')">
                    🗑 Delete
                </button>

            </td>

        </tr>

        `;

    });

}

function searchPlaces() {

    const keyword = document
        .getElementById("searchPlace")
        .value
        .toLowerCase();

    const filtered = places.filter(place =>

        place.name.toLowerCase().includes(keyword)

        ||

        place.district.toLowerCase().includes(keyword)

        ||

        place.category.toLowerCase().includes(keyword)

    );

    displayPlaces(filtered);

}
// Edit Place
function editPlace(id) {

    window.location.href = "edit-place.html?id=" + id;

}

// Delete Place
async function deletePlace(id) {

    if (!confirm("Delete this place?")) return;

    const token = localStorage.getItem("token");

    const response = await fetch(

        "http://localhost:5000/api/admin/places/" + id,

        {
            method: "DELETE",

            headers: {
                Authorization: "Bearer " + token
            }
        }

    );

    const data = await response.json();

    if (data.success) {

        alert("Place deleted.");

        loadPlaces();

    } else {

        alert(data.message);

    }

}

loadPlaces();