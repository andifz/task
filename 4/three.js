const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

for (let a = 0; a < data.length; a++) {
  let dataName = data[a].profile.full_name;
  let name = dataName.toLowerCase();
  let search = /annis/;
  let searchName = name.match(new RegExp(search));
  if ((data[a].profile.full_name = searchName)) {
    console.log(data[a].username);
  }
}
