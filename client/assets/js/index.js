// Featured Cities
const cities = [
    {
        id: 1,
        name: "Ranchi",
        image: "assets/images/ranchi.jpg",
        description: "The capital city."
    },
    {
        id: 2,
        name: "Jamshedpur",
        image: "assets/images/Jamshedpur/ZoologicalPark-Jsr.jpg",
        description: "India's first planned industrial city."
    },
    {
        id: 3,
        name: "Dhanbad",
        image: "assets/images/Dhanbad.jpg",
        description: "Known as the Coal Capital of India."
    },
    {
        id: 4,
        name: "Hazaribagh",
        image: "assets/images/Hazaribagh/Jheel-Hzb.jpg",
        description: "Known as the beautiful Gardens."
    },
    {
        id: 5,
        name: "Deoghar",
        image: "assets/images/Deoghar/AIIMS-Deoghar.jpg",
        description: "A famous pilgrimage destination."
    },
    {
        id: 6,
        name: "Giridih",
        image: "assets/images/Giridih.jpg",
        description: "Famous for Parasnath Hills"
    },
    {
        id: 7,
        name: "Ramgarh",
        image: "assets/images/ramgarh.jpg",
        description: "Coal & Tourism"
    },
    {
        id: 8,
        name: "Dumka",
        image: "assets/images/Dumka/MassanjoreDam-Dumka.jpg",
        description: "Sub Capital of Jharkhand"
    },
    {
        id: 9,
        name: "Koderma",
        image: "assets/images/Koderma.jpg",
        description: "Mica Capital of India"
    },
    {
        id: 10,
        name: "Bokaro",
        image: "assets/images/Bokaro.jpg",
        description: "Industrial Hub"
    },
];

// Popular Places
const places = [
    {
        id: 1,
        name: "Canary Hill",
        city: "Hazaribagh",
        image: "assets/images/Hazaribagh/CanaryHill-Hzb.jpg"
    },
    {
        id: 2,
        name: "Hundru Falls",
        city: "Ranchi",
        image: "assets/images/Ranchi/HundruFall-Ranchi.jpg"
    },
    {
        id: 3,
        name: "Jubilee Park",
        city: "Jamshedpur",
        image: "assets/images/Jamshedpur.jpg"
    },
    {
        id: 4,
        name: "Baidyanath Temple",
        city: "Deoghar",
        image: "assets/images/Deoghar/BabaDham-Deoghar.jpg"
    },
    {
        id: 5,
        name: "Patratu Valley",
        city: "Ramgrah",
        image: "assets/images/ramgarh.jpg"
    },
    {
        id: 6,
        name: "Mathon Dam",
        city: "Dhanbad",
        image: "assets/images/Dhanbad/MathonDam-Dhn.jpg",
    },
    {
        id: 7,
        name: "Jagannath Temple",
        city: "Bokaro",
        image: "assets/images/Bokaro/JagannathTemple-Bokaro.jpg",
    },
    {
        id: 8,
        name: "Parasnath Hill",
        city: "Giridih",
        image: "assets/images/Giridih/ParasnathHill-Giridih.jpg",
    }
];

// Load Cities

function loadCities() {
    const cityContainer = document.getElementById("cityContainer");
    if (!cityContainer) return;
    cityContainer.innerHTML = "";
    cities.forEach(city => {
        cityContainer.innerHTML += `
<div class="card">
<img src="${city.image}" alt="${city.name}">
<div class="card-content">
<h3>${city.name}</h3>
<p>${city.description}</p>
<button onclick="openCity('${city.name}')">
Explore ->
</button>
</div>
</div>
`;
    });
}

// Load Places
function loadPlaces() {
    const placeContainer = document.getElementById("placeContainer");
    if (!placeContainer) return;
    placeContainer.innerHTML = "";
    places.forEach(place => {
        placeContainer.innerHTML += `
<div class="card">
<img src="${place.image}" alt="${place.name}">
<div class="card-content">
<h3>${place.name}</h3>
<p>${place.city}</p>
<button onclick="openPlace('${place.name}')">
View Details
</button>
</div>
</div>
`;
    });
}

// Open City Page
function openCity(city) {
    localStorage.setItem("selectedCity", city);
    window.location.href = "city.html";
}

// Open Place Page
function openPlace(place) {
    localStorage.setItem("selectedPlace", place);
    window.location.href = "place.html";
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Welcome Message
console.log("Welcome to Go-Explore Tourism");

// Page Loaded
window.onload = function () {
    loadCities()
    loadPlaces();
};