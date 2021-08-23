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
    let json = Object.values(data);
    // console.log(json);

    // return json;
    // console.log(json);

    // console.log(json);
    let datas = data.map((a) => {
      a.fullname = `${a.name.title}  ${a.name.first}  ${a.name.last}`;

      return a;
    });
    const [{ fullname, phone, email }] = datas;
    console.log(fullname, phone, email);
    // let dataObject = JSON.stringify({ fullname, name, phone });
    // console.log(dataObject);
    // console.log(typeof { fullname, phone, email });
    // fs.writeFileSync("data.csv", fullname, phone, email);
  } catch (error) {
    console.error(error);
  }
};

name();
