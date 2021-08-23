const axios = require("axios").default;

async function getData(url) {
  return (await axios.get(url)).data;
}

async function getUsers() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

async function mergeData() {
  let posts = getPosts;
  let users = getUsers;
  console.log(posts);
}
mergeData();
