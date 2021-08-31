const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

data.map((a) => {
  if (a.profile.phones.length === 0) {
    console.log(a.username);
  }
});
