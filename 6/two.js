const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

for (let a = 0; a < data.length; a++) {
  if (data[a].type === "electronic") {
    const electronic = data[a];
    const electronicjson = JSON.stringify(electronic);
    console.log(electronicjson);
  }
}
