// const { profile } = require("console");

const { log } = require("console");

let data = [
  {
    id: 323,
    username: "rinood30",
    profile: {
      full_name: "Shabrina Fauzan",
      birthday: "1988-10-30",
      phones: ["08133473821", "082539163912"],
    },
    "articles:": [
      {
        id: 3,
        title: "Tips Berbagi Makanan",
        published_at: "2019-01-03T16:00:00",
      },
      {
        id: 7,
        title: "Cara Membakar Ikan",
        published_at: "2019-01-07T14:00:00",
      },
    ],
  },
  {
    id: 201,
    username: "norisa",
    profile: {
      full_name: "Noor Annisa",
      birthday: "1986-08-14",
      phones: [],
    },
    "articles:": [
      {
        id: 82,
        title: "Cara Membuat Kue Kering",
        published_at: "2019-10-08T11:00:00",
      },
      {
        id: 91,
        title: "Cara Membuat Brownies",
        published_at: "2019-11-11T13:00:00",
      },
      {
        id: 31,
        title: "Cara Membuat Brownies",
        published_at: "2019-11-11T13:00:00",
      },
    ],
  },
  {
    id: 42,
    username: "karina",
    profile: {
      full_name: "Karina Triandini",
      birthday: "1986-04-14",
      phones: ["06133929341"],
    },
    "articles:": [],
  },
  {
    id: 201,
    username: "icha",
    profile: {
      full_name: "Annisa Rachmawaty",
      birthday: "1987-12-30",
      phones: [],
    },
    "articles:": [
      {
        id: 39,
        title: "Tips Berbelanja Bulan Tua",
        published_at: "2019-04-06T07:00:00",
      },
      {
        id: 43,
        title: "Cara Memilih Permainan di Steam",
        published_at: "2019-06-11T05:00:00",
      },
      {
        id: 58,
        title: "Cara Membuat Brownies",
        published_at: "2019-09-12T04:00:00",
      },
    ],
  },
];

// 1

for (let a = 0; a < data.length; a++) {
  if (data[a].profile.phones[0] === undefined) {
    // console.log(data[a].username);
  }
}

// 2
for (let a = 0; a < data.length; a++) {
  if (data[a]["articles:"][0] !== undefined) {
    // console.log(data[a].username);
  }
}

// 3

for (let a = 0; a < data.length; a++) {
  let dataName = data[a].profile.full_name;
  let name = dataName.toLowerCase();
  let search = /annis/;
  let searchName = name.match(new RegExp(search));
  if ((data[a].profile.full_name = searchName)) {
    // console.log(data[a].username);
  }
}

//4
let newArray = [];
for (let a = 0; a < data.length; a++) {
  let array = data[a]["articles:"].length;
  for (let b = 0; b < array; b++) {
    if (data[a]["articles:"][b].published_at.match(/2019/)) {
      newArray.push(data[a].username);
    }
  }
}
let uniq = [...new Set(newArray)];

// 5
for (let a = 0; a < data.length; a++) {
  let d = data[a].profile.birthday;
  let newdate = new Date(d);
  // console.log(newdate);
  let Year = newdate.getFullYear();
  // console.log(Year);
  if (Year === 1986) {
    console.log(data[a].username);
  }
}
