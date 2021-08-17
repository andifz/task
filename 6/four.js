const fs = require("fs");
const rawdata = fs.readFileSync("data.json");
const data = JSON.parse(rawdata);

for (let a = 0; a < data.length; a++) {
  if (
    new Date(data[a].purchased_at * 1000).toString().substr(5, 10) ==
    new Date("2020/01/16").toString().substr(5, 10)
  ) {
    const purchase = data[a];
    const purchaseJson = JSON.stringify(purchase);
    console.log(purchaseJson);
  }
}
