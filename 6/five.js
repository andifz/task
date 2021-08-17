const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

for (let a = 0; a < data.length; a++) {
  for (let b = 0; b < data[a].tags.length; b++) {
    if (data[a].tags[b] === "brown") {
      const brown = data[a];
      const allBrown = JSON.stringify(brown);
      console.log(allBrown);
    }
  }
}
