const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].category === "fruits") {
//     console.log(fruits[i]);
//   }
// }

let filterFruits = data.filter((x) => x.category === "fruits");
console.log(filterFruits);
