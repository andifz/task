const axios = require("axios");
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

// 2
async function getGender() {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    const looping = response.data.results;
    for (let i = 0; i < looping.length; i++) {
      if (looping[i].gender === "male") {
        console.log(looping[i].gender);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

console.log(getGender());
