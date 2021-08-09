const fs = require("fs");
const rawdata = fs.readFileSync("orders.json");
const orders = JSON.parse(rawdata);

let nameItems = orders
  .map((a) => {
    a.total = a.items.map((b) => b.qty * b.price).reduce((c, d) => c + d);
    return a;
  })
  .filter((a) => a.total < 300000)
  .map((a) => a.customer.name);

function removeDuplicate(name) {
  return name.filter((value, index) => name.indexOf(value) === index);
}
console.log(removeDuplicate(nameItems));
