const axios = require("axios");
const fs = require("fs");

// 1
async function getName() {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    const looping = response.data.results;
    for (let i = 0; i < looping.length; i++) {
      console.log(
        looping[i].name.title +
          " " +
          looping[i].name.first +
          " " +
          looping[i].name.last
      );
    }
  } catch (error) {
    console.error(error);
  }
}
// getName();

// console.log(getName);
// 2
async function getGender() {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    const looping = response.data.results;
    // for (let i = 0; i < looping.length; i++) {
    //   if (looping[i].gender === "male") {
    //     console.log(looping[i].gender);
    //   }
    // }
    const dataGender = looping.filter((a) => a.gender === "male");
    console.log({ dataGender });
  } catch (error) {
    console.error(error);
  }
}

// getGender();

// 3

// const convertToCSV = function objectToCsv(data) {};

const name = async function () {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    let data = response.data.results;

    var a = data
      .map((b) => {
        var c = {
          name: b.name.first,
          phone: b.phone,
          email: b.email,
        };
        return Object.values(c).toString();
      })
      .join("\n");
    console.log(a);
    fs.writeFileSync("a.csv", a);
  } catch (error) {
    console.error(error);
  }
};

name();
