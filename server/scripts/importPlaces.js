const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const connectDB = require("../config/db");
const Place = require("../models/Place");

const places = require("../../client/assets/js/places-data");

async function importPlaces() {

    try {

        await connectDB();

        const formattedPlaces = places.map(place => ({

            name: place.name,

            district: place.location
                ? place.location.split(",")[0].trim()
                : "Unknown",

            category: place.category || "Other",

            image: place.image,

            description: place.description,

            rating: Number(place.rating) || 5,

            map: place.map || ""

        }));

        // Clear old data
        await Place.deleteMany({});

        // Insert new data
        await Place.insertMany(formattedPlaces);

        console.log(`✅ Imported ${formattedPlaces.length} places successfully.`);

        process.exit(0);

    } catch (err) {

        console.error(err);

        process.exit(1);

    }

}

importPlaces();