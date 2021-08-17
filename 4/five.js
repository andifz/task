const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

for (let a = 0; a < data.length; a++) {
  let d = data[a].profile.birthday;
  let newdate = new Date(d);
  let Year = newdate.getFullYear();
  if (Year === 1986) {
    console.log(data[a].username);
  }
}
