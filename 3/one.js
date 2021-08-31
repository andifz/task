const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

let filterFruits = data.filter((x) => x.category === "fruits");
console.log(filterFruits);
