checkAuth();

async function addToWishlist() {

    const token = localStorage.getItem("token");
console.log("Token:", token);
console.log("Place:", localStorage.getItem("selectedPlace"));

    const place =
        localStorage.getItem("selectedPlace");

    if (!place) {
        alert("No place selected.");
        return;
    }

    try {

        const response = await fetch("http://localhost:5000/api/wishlist", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
        place: localStorage.getItem("selectedPlace")
    })
});

        const data = await response.json();

        if (data.success) {

            alert("❤️ Added to Wishlist");

        } else {

            alert(data.message);

        }

    } catch (err) {

        console.error(err);

        alert("Unable to add wishlist.");

    }

}