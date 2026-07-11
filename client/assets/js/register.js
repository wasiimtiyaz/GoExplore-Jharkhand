const form = document.getElementById("registerForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    document.querySelectorAll(".error").forEach(el => el.innerHTML = "");
    document.getElementById("successMsg").innerHTML = "";

    let valid = true;

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Enter your full name";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Enter email";
        valid = false;
    }

    if (phone.length !== 10) {
        document.getElementById("phoneError").innerHTML = "Phone must be 10 digits";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Minimum 6 characters";
        valid = false;
    }

    if (password !== confirm) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
        valid = false;
    }

    if (!terms) {
        alert("Please accept Terms & Conditions");
        valid = false;
    }

    if (!valid) return;

    try {

        const response = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
    name,
    email,
    phone,
    password
})
        });

        const data = await response.json();

        if (data.success) {

            document.getElementById("successMsg").innerHTML =
                "Registration Successful! Redirecting...";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1500);

        } else {
            alert(data.message);
        }

    } catch (error) {
        console.error(error);
        alert("Unable to connect to server.");
    }
});