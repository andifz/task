const fs = require("fs");
const rawdata = fs.readFileSync("orders.json");
const orders = JSON.parse(rawdata);

const price = [];
for (let i = 0; i < orders.length; i++) {
  if (orders[i].customer.name === "Ari") {
    for (let a = 0; a < orders[i].items.length; a++) {
      let barang = orders[i].items[a].price;
      price.push(barang);
    }
  }
}

let total = price.reduce((a, b) => a + b);
console.log(total);
