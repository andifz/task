const axios = require("axios");

// let posts = 'https://jsonplaceholder.typicode.com/posts'
// let users = 'https://jsonplaceholder.typicode.com/users'
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

console.log(getPosts());
console.log(getUsers());
