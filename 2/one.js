const axios = require("axios").default;

async function getData(url) {
  return (await axios.get(url)).data;
}

async function mergeData() {
  let posts = await getData("https://jsonplaceholder.typicode.com/posts");
  let users = await getData("https://jsonplaceholder.typicode.com/users");
  let array = [];
  for (let a = 0; a < posts.length; a++) {
    for (let b = 0; b < users.length; b++) {
      if (posts[a].userId === users[b].id) {
        const { ...data } = posts[a];
        data.user = users[b];
        array.push(data);
      }
    }
  }
  console.log(array);
}

mergeData();
