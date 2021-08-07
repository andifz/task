const axios = require("axios");

// let posts = 'https://jsonplaceholder.typicode.com/posts'
// let users = 'https://jsonplaceholder.typicode.com/users'
async function getPost() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response);
  } catch (error) {
    //   console.error(error);
  }
}

async function getUser() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
  } catch (err) {
    // console.log(err)
  }
}

getPost();

// console.log(getPost())
// console.log(getPost())
// Promise.all([getPost(), getUser()])
//   .then(function (results) {
//     const acct = results[0];
//     const perm = results[1];
//   });

// const getPosts =axios.get(posts)
// const getUser =axios.get(users)
