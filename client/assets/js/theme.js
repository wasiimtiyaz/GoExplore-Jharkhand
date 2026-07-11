const themeBtn = document.getElementById("themeBtn");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    if (themeBtn) {
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
}