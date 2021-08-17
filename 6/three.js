const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

for (let a = 0; a < data.length; a++) {
  if (data[a].type === "furniture") {
    const furniture = data[a];
    const furniturjson = JSON.stringify(furniture);
    console.log(furniturjson);
  }
}
