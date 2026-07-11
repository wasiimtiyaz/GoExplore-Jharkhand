// Get selected city
const selectedCity = localStorage.getItem("selectedCity");
// City Database
const cityData = {   
    Ranchi:{
    description:"The capital city famous for waterfalls and hills."
    },

    Jamshedpur:{
    description:"India's first planned industrial city."
    },

    Dhanbad:{
    description:"Known as the Coal Capital of India."
    },

    Hazaribagh:{
    description:"Known as the beautiful Lakes and Gardens."
    },

    Deoghar:{
    description:"A famous pilgrimage destination."
    },

    Giridih:{
    description: "Famous for Parasnath Hills"
    },

    Ramgarh:{
    description: "Coal & Tourism"
    },

    Dumka:{
    description: "Sub Capital of Jharkhand"
    },

    Koderma:{
    description: "Mica Capital of India"
    },

    Bokaro:{
    description: "Industrial Hub"
    }
};

// Load City
function loadCity() {
    if (!selectedCity) {
        window.location.href = "index.html";
        return;
    }

    const city = cityData[selectedCity];
    document.getElementById("cityName").textContent = selectedCity;
    if (city) {
        document.getElementById("cityDescription").textContent = city.description;
    } else {
        document.getElementById("cityDescription").textContent = "Welcome to Go-Explore Tourism";
    }
}

// Open Category
function openCategory(category) {
    localStorage.setItem("selectedCategory", category);
    window.location.href = "category.html";
}

// Card Animation
function prepareCards() {
    document.querySelectorAll(".card").forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = ".6s";
    });
}

// Scroll Animation
window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Greeting
function greeting() {
    const hour = new Date().getHours();
    if (hour < 12)
        console.log("Good Morning");
    else if (hour < 18)
        console.log("Good Afternoon");
    else
        console.log("Good Evening");
}

// Page Load
window.onload = function () {
    loadCity();
    prepareCards();
    greeting();
};