const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

let newArray = [];
for (let a = 0; a < data.length; a++) {
  let array = data[a]["articles:"].length;
  for (let b = 0; b < array; b++) {
    if (data[a]["articles:"][b].published_at.match(/2019/)) {
      newArray.push(data[a].username);
    }
  }
}
let uniq = [...new Set(newArray)];
