const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    try {
        const res = await fetch("https://goexplore-jharkhand.onrender.com/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message
            })
        });

        const data = await res.json();

        if (data.success) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert(data.message);
        }

    } catch (err) {
        alert("Server not responding.");
    }
});