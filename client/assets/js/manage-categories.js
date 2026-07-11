checkAuth();

const user = getUser();

if (!user || user.role !== "admin") {

    alert("Access Denied");

    window.location.href = "index.html";

}

let categories = [];

// Load Categories
async function loadCategories() {

    const token = localStorage.getItem("token");

    try {

        const response = await fetch(

            "http://localhost:5000/api/categories",

            {

                headers: {

                    Authorization: "Bearer " + token

                }

            }

        );

        const data = await response.json();

        if (data.success) {

            categories = data.categories;

            displayCategories(categories);

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.error(err);

    }

}

// Display Categories
function displayCategories(list) {

    const table = document.getElementById("categoryTable");

    table.innerHTML = "";

    list.forEach(category => {

        table.innerHTML += `

        <tr>

            <td>${category.name}</td>

            <td>

                <button onclick="deleteCategory('${category._id}')">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

}

// Add Category
async function addCategory() {

    const name = document.getElementById("categoryName").value.trim();

    if (!name) {

        alert("Enter category name.");

        return;

    }

    const token = localStorage.getItem("token");

    const response = await fetch(

        "http://localhost:5000/api/categories",

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json",

                Authorization: "Bearer " + token

            },

            body: JSON.stringify({

                name

            })

        }

    );

    const data = await response.json();

    if (data.success) {

        alert("Category added.");

        document.getElementById("categoryName").value = "";

        loadCategories();

    } else {

        alert(data.message);

    }

}

// Delete Category
async function deleteCategory(id) {

    if (!confirm("Delete this category?")) return;

    const token = localStorage.getItem("token");

    const response = await fetch(

        "http://localhost:5000/api/categories/" + id,

        {

            method: "DELETE",

            headers: {

                Authorization: "Bearer " + token

            }

        }

    );

    const data = await response.json();

    if (data.success) {

        alert("Category deleted.");

        loadCategories();

    } else {

        alert(data.message);

    }

}

// Search Category
function searchCategories() {

    const keyword = document

        .getElementById("searchCategory")

        .value

        .toLowerCase();

    const filtered = categories.filter(category =>

        category.name.toLowerCase().includes(keyword)

    );

    displayCategories(filtered);

}

loadCategories();