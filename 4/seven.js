const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

for (let a = 0; a < data.length; a++) {
  for (let b = 0; b < data[a]["articles:"].length; b++) {
    const d = data[a]["articles:"][b].published_at;
    let newdate = new Date(d);
    let month = newdate.getMonth() + 1;
    if (month < 8) {
      console.log(data[a]["articles:"][b].published_at);
    }
  }
}
