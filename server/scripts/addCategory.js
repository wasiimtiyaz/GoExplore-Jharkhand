const fs = require("fs");
const path = require("path");

const filePath = path.join(
    __dirname,
    "../../client/assets/js/places-data.js"
);

let data = fs.readFileSync(filePath, "utf8");

let currentCategory = "";

const lines = data.split("\n");

const output = [];

for (let line of lines) {

    // Detect section comments
    if (line.trim().startsWith("//")) {

        currentCategory = line
            .replace("//", "")
            .trim()
            .replace(/S$/, ""); // RESTAURANTS -> RESTAURANT

        output.push(line);
        continue;
    }

    output.push(line);

    // Insert category after name:
    if (line.includes("name:")) {

        output.push(
            `    category:"${currentCategory}",`
        );

    }

}

fs.writeFileSync(filePath, output.join("\n"));

console.log("✅ Categories added successfully.");