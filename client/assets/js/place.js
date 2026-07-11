const params = new URLSearchParams(window.location.search);

const selectedPlace =
    params.get("place") || localStorage.getItem("selectedPlace");

console.log("Selected Place:", selectedPlace);

// Load Place
function loadPlace() {

    if (!selectedPlace) {
        window.location.href = "index.html";
        return;
    }

    let place = placeDatabase[selectedPlace];

    // Case-insensitive search
    if (!place) {

        const key = Object.keys(placeDatabase).find(
            p => p.toLowerCase() === selectedPlace.toLowerCase()
        );

        if (key) {
            place = placeDatabase[key];
        }

    }

    if (!place) {
        alert("Place not found.");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("placeName").textContent = place.name;
    document.getElementById("placeLocation").textContent = place.location;
    document.getElementById("placeTitle").textContent = place.name;
    document.getElementById("placeDescription").textContent = place.description;
    document.getElementById("placeImage").src = place.image;
    document.getElementById("placeImage").alt = place.name;
    document.getElementById("rating").textContent = place.rating;
    document.getElementById("entryFee").textContent = place.fee;
    document.getElementById("timing").textContent = place.timing;
    document.getElementById("address").textContent = place.address;
    document.getElementById("mapFrame").src = place.map;

   
}
 // Save for Booking Page
   function bookPlace() {
    localStorage.setItem("bookingPlace", selectedPlace);
}

// Share Button
function sharePlace() {

    if (navigator.share) {

        navigator.share({
            title: selectedPlace,
            text: "Explore this place on Go-Explore Tourism",
            url: window.location.href
        });

    } else {

        alert("Sharing is not supported on this browser.");

    }

}

// Prepare Animation
function prepareAnimation() {

    document.querySelectorAll(".card").forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = ".6s";

    });

}

// Scroll Animation
window.addEventListener("scroll", () => {

    document.querySelectorAll(".card").forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});

function goBack() {
    history.back();
}

window.onload = function () {

    loadPlace();
    prepareAnimation();

    console.log("Place Loaded Successfully");

};