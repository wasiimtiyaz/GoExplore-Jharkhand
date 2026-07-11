// Check if user is logged in (used ONLY on protected pages like profile or bookings)
function requireAuth() {
    const token = localStorage.getItem("token");
    if (!token) {
        alert("Please login first to access this page.");
        window.location.href = "login.html";
    }
}
function checkAuth() {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Please login first.");
        window.location.href = "login.html";
        return;
    }
}

// Check login status quietly (used on public pages like index.html to toggle navbar buttons)
function isLoggedIn() {
    return localStorage.getItem("token") !== null;
}

// Get logged-in user details
function getUser() {
    return JSON.parse(localStorage.getItem("user"));
}

// Logout
function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out successfully.");
    window.location.href = "index.html"; // Redirect to homepage after logout
}
