const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please enter email and password.");
        return;
    }

    try {

        const response = await fetch("http://localhost:5000/api/auth/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
              password
            })
        });

        const data = await response.json();
        if (data.success) {

            // Save JWT token
            localStorage.setItem("token", data.token);

            // Save user details
            localStorage.setItem("user", JSON.stringify(data.user));
            alert("Login Successful!");
            window.location.href = "index.html";
        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error(error);
        alert("Unable to connect to server.");
    }
});