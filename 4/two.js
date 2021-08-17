const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

for (let a = 0; a < data.length; a++) {
  if (data[a]["articles:"][0] !== undefined) {
    console.log(data[a].username);
  }
}
