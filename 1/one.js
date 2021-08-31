const fs = require("fs");
const rawdata = fs.readFileSync("orders.json");
const data = JSON.parse(rawdata);

// #1.
// for (let i = 0; i < data.length; i++) {
//   const a = data[i].created_at;
//   const time = new Date(a);
//   const month = time.getMonth() + 1;
//   if (month == 2) {
//     console.log(a);
//   }
// }

const madeFebruary = data.filter((a) => {
  a.created_at;
  const month = new Date(a.created_at);
  const february = month.getMonth();
  if (february === 1) {
    console.log(`Purchase made in Februari is ${a.created_at}`);
  }
});
