checkAuth();

const user = getUser();

if (!user || user.role !== "admin") {
    alert("Access Denied!");
    window.location.href = "index.html";
}

async function loadUsers() {

    const token = localStorage.getItem("token");

    try {

        const response = await fetch(
            "http://localhost:5000/api/admin/users",
            {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }
        );

        const data = await response.json();

        const table = document.getElementById("userTable");

        table.innerHTML = "";

        if (!data.success || data.users.length === 0) {

            table.innerHTML = `
                <tr>
                    <td colspan="5">No users found.</td>
                </tr>
            `;

            return;
        }

        data.users.forEach(u => {

            table.innerHTML += `
                <tr>

                    <td>${u.name}</td>

                    <td>${u.email}</td>

                    <td>${u.phone || "-"}</td>

                    <td>${u.role}</td>

                    <td>
                        <button onclick="deleteUser('${u._id}')">
                            Delete
                        </button>
                    </td>

                </tr>
            `;

        });

    } catch (err) {

        console.error(err);

        alert("Unable to load users.");

    }

}

async function deleteUser(id) {

    if (!confirm("Delete this user?")) return;

    const token = localStorage.getItem("token");

    const response = await fetch(
        "http://localhost:5000/api/admin/users/" + id,
        {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + token
            }
        }
    );

    const data = await response.json();

    if (data.success) {

        alert("User deleted successfully.");

        loadUsers();

    } else {

        alert(data.message);

    }

}

loadUsers();