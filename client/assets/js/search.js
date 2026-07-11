const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const suggestions = document.getElementById("suggestions");

function showSuggestions() {

    const value = searchInput.value.trim().toLowerCase();

    suggestions.innerHTML = "";

    if (value === "") {
        suggestions.style.display = "none";
        return;
    }

    // Search Cities
    const cityMatches = cities
        .filter(city => city.name.toLowerCase().includes(value))
        .map(city => ({
            type: "city",
            name: city.name
        }));

    // Search Places
    const placeMatches = Object.keys(placeDatabase)
        .filter(name => name.toLowerCase().includes(value))
        .map(name => ({
            type: "place",
            name: name
        }));

    const matches = [...cityMatches, ...placeMatches].slice(0, 10);

    if (matches.length === 0) {
        suggestions.style.display = "none";
        return;
    }

    matches.forEach(item => {

        const div = document.createElement("div");
        div.className = "suggestion-item";
        div.innerHTML =
            item.type === "city"
                ? "🏙️ " + item.name
                : "📍 " + item.name;

        div.onclick = function () {

            searchInput.value = item.name;
            suggestions.style.display = "none";

        };

        suggestions.appendChild(div);

    });

    suggestions.style.display = "block";
}

searchInput.addEventListener("input", showSuggestions);

searchBtn.addEventListener("click", function () {

    const keyword = searchInput.value.trim().toLowerCase();

    if (keyword === "") {
        alert("Please enter a destination.");
        return;
    }

    // Search City
    const city = cities.find(
        c => c.name.toLowerCase() === keyword
    );

    if (city) {
        localStorage.setItem("selectedCity", city.name);
        window.location.href = "city.html";
        return;
    }

    // Search Place (case-insensitive)
    const placeKey = Object.keys(placeDatabase).find(
        name => name.toLowerCase() === keyword
    );

    if (placeKey) {

        localStorage.setItem("selectedPlace", placeKey);
        window.location.href =
            "place.html?place=" + encodeURIComponent(placeKey);
        return;

    }

    alert("Destination not found.");

});

searchInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        searchBtn.click();
    }

});

document.addEventListener("click", function (e) {

    if (
        !searchInput.contains(e.target) &&
        !suggestions.contains(e.target)
    ) {
        suggestions.style.display = "none";
    }

});