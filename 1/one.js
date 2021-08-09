const fs = require("fs");
const rawdata = fs.readFileSync("orders.json");
// console.log(rawdata);
const data = JSON.parse(rawdata);
// console.log(data);

// #1.
for (let i = 0; i < data.length; i++) {
  if (
    data[i].created_at === "2018-02-17T03:24:12" ||
    data[i].created_at === "2018-02-20T13:10:32" ||
    data[i].created_at === "2018-02-28T15:20:43"
  ) {
    console.log(data[i]);
  }
}
