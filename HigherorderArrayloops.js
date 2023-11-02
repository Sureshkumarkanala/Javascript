//For of loop
//is used to itrerate the array/string

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
  //   console.log(num);
}

const str = "All the best";

for (const s of str) {
  //   console.log("each char is", s);
}

const map = new Map();

map.set("IN", "India");
map.set("us", "united states");
map.set("NZ", "new zeland");
map.set("NZ", "new zeland");

// console.log(map);
//it will display unique values only

// output:
// --------

// Map(3){

// "IN"=> "India",
// "us"=>"united states",
// "NZ"=> "new zeland"
// }

for (const [key, value] of map) {
  //   console.log(key, ":", value);
}

// output:
// -------
// IN: Inida
// NZ: New zeland
// us:united states

// For object for of not work we get the error

const myobj = {
  game1: "Cricket",
  game2: "Hockey",
  game3: "Football",
};

for (const key in myobj) {
  //   console.log("keys are", key);
  //   console.log("values are", myobj[key]);
}

// ouput:
// ------
// game1
// cricket
// game2
// Hockey
// game3
// Football

const arr2 = ["js", "java", "react"];
for (const key in arr2) {
  //   console.log(key); // we get index of array  0 1 2
  //   console.log(arr2[key]); // sj java react
}

// foreach loop

const arrEach = ["js", "html", "css", "react", "Angular"];
arrEach.forEach((value, index) => {
  //   console.log(value);
});

const Mydata = [
  {
    name: "Arun",
    age: 30,
    company: "hCL",
  },
  {
    name: "Suresh",
    age: 30,
    company: "Wipro",
  },
  {
    name: "Kumar",
    age: 30,
    company: "TCS",
  },
];

//How to get the company names
//For each will not return any thing means not store in any other  variable

// const values = Mydata.forEach((item) => {
//   console.log("each object is", item);
//   console.log("Company details are", item.company);
//   return item.age; //empty
// });

// console.log(values); //undefined

//Filter Method: it will return the values in new array (which are conditions satify)

const nums = [1, 2, 3, 5, 4, 6, 8, 9];

const newnum = nums.filter((val) => {
  return val > 6;
});
// console.log(newnum);

const books = [
  { publish: 1990, ganeric: "History", price: 100 },
  { publish: 1991, ganeric: "Science", price: 200 },
  { publish: 1992, ganeric: "social", price: 300 },
  { publish: 1993, ganeric: "History", price: 500 },
  { publish: 1994, ganeric: "Ploitices", price: 500 },
  { publish: 1995, ganeric: "science", price: 600 },
  { publish: 1996, ganeric: "social", price: 600 },
  { publish: 1996, ganeric: "science", price: 700 },
  { publish: 1997, ganeric: "History", price: 700 },
  { publish: 1998, ganeric: "politics", price: 800 },
  { publish: 1999, ganeric: "History", price: 900 },
  { publish: 2000, ganeric: "social", price: 100 },
];

const HistoryBook = books.filter(
  (data) => data.ganeric === "History" && data.publish > 1995
);
// console.log(HistoryBook);

const addnum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const totalnum = addnum.map((num) => {
  return num + 10;
});
// console.log(totalnum);

// const fiftyabove=addnum
//              .map((num)=>{return num*10})
//              .map((num)=>{return num+5})
//              .filter((num)=>(num>50))

//              console.log(fiftyabove);

const fiftyabove = addnum
  .map((num) => {
    return num * 10;
  })
  .map((num) => {
    return num + 5;
  })
  .filter((num) => num > 50);

// console.log(fiftyabove);

//reduce function

const totalval = addnum.reduce((acc, cur) => acc + cur, 0);
// console.log("total value is ", totalval);

const booktotalprice = books.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);
console.log(booktotalprice);
