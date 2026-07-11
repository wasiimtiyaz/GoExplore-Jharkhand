checkAuth();

const user = getUser();

if (!user || user.role !== "admin") {

    alert("Access Denied");

    window.location.href = "index.html";

}

let contacts = [];

// Load Contacts
async function loadContacts() {

    const token = localStorage.getItem("token");

    try {

        const response = await fetch(
            "http://localhost:5000/api/admin/contacts",
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );

        const data = await response.json();

        if (data.success) {

            contacts = data.contacts;

            displayContacts(contacts);

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.error(err);

        alert("Unable to load contact messages.");

    }

}

// Display Contacts
function displayContacts(list) {

    const table = document.getElementById("contactTable");

    table.innerHTML = "";

    if (list.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="5">No contact messages found.</td>
            </tr>
        `;

        return;

    }

    list.forEach(c => {

        table.innerHTML += `

        <tr>

            <td>${c.name}</td>

            <td>${c.email}</td>

            <td>${c.message}</td>

            <td>${new Date(c.createdAt).toLocaleDateString()}</td>

            <td>

                <button onclick="deleteContact('${c._id}')">

                    Delete

                </button>

            </td>

        </tr>

        `;

    });

}

// Search Contacts
function searchContacts() {

    const keyword = document
        .getElementById("searchContact")
        .value
        .toLowerCase();

    const filtered = contacts.filter(c =>

        c.name.toLowerCase().includes(keyword) ||

        c.email.toLowerCase().includes(keyword)

    );

    displayContacts(filtered);

}

// Delete Contact
async function deleteContact(id) {

    if (!confirm("Delete this message?")) return;

    const token = localStorage.getItem("token");

    const response = await fetch(

        "http://localhost:5000/api/admin/contacts/" + id,

        {

            method: "DELETE",

            headers: {

                Authorization: "Bearer " + token

            }

        }

    );

    const data = await response.json();

    if (data.success) {

        alert("Message deleted successfully.");

        loadContacts();

    } else {

        alert(data.message);

    }

}

loadContacts();