const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);
let array = [];
for (let a = 0; a < data.length; a++) {
  if (data[a].placement.name === "Meeting Room") {
    const items = data[a];
    array.push(items);
  }
}
const itemJson = JSON.stringify(array);

fs.appendFileSync("items.json", itemJson);
