const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

for (let a = 0; a < data.length; a++) {
  for (let b = 0; b < data[a]["articles:"].length; b++) {
    if (data[a]["articles:"][b].title.match(/tips/i)) {
      console.log(data[a]["articles:"][b].title);
    }
  }
}
