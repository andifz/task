const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

for (let a = 0; a < data.length; a++) {
  if (data[a].placement.name === "Meeting Room") {
    const items = data[a];
    const itemJson = JSON.stringify(items);
    console.log(itemJson);
  }
}
