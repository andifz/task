const axios = require("axios").default;

async function getPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
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
