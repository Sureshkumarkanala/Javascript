// Objects: is  collection of elements in the form of properties and methods

// property is a key-value pair

// array : have a collection of values

// Creating a Object in JS:

// 1. Object Literals
// 2.using new keyowrd with object constructor
// 3. using new keyword with a constructor function
// 4.object.create()method
// 5.classes

// Object Literals:
// ----------------

// let obj={} // empty object in the form of object literals

// let movie = {
//   name: "RRR",
//   director: "Rajamouli",
// }; //object with key value form

//Accessing the values inside object in 2 ways
// console.log(movie["director"]);
// console.log(movie.name);

//Adding the values to the object, if we give same key with different value then replaced with new value automatically
// movie.budget = "400 crs";
// movie.name = "Bahuballi";
// console.log(movie);

// 2.using new keyowrd with object constructor or Object constructor :
// -------------------------------------------------------------------

// let movie1 = new Object();
// console.log(movie1);
// movie1.name = "one";
// movie1.director = ["sukumar"];
// console.log(movie1);

// 3. using new keyword with a constructor function :
// -----------------------------------------------------

// create a construtcor function (same as normal function)

// function mov(n, dir) {
//   console.log(n, dir);
//   this.name = n;
//   this.director = dir;
// }
// let movie2 = new mov("pushpa", "sukumar");
// let movie3 = new mov("karthekeya", "chandu");
// movie3.result = "BlockBuster";
// console.log(movie2);
// console.log(movie3);

// 4.object.create()method:
// ------------------------

// let movie = { name: "panja", director: "vishnu" };

// console.log(movie);
// let movie2 = Object.create(movie, {
//   name: { value: "gabbarsingh" },
//   director: { value: "shankar" },
// });
// console.log(movie2);
// movie2.result = "Blockbucter";
// console.log(movie2);

// let moviefun = {
//   name: "panja",
//   director: "vishnu",
//   mvs: function () {
//     console.log("function inside obj");
//     console.log(this.name);
//   },
// };

// // console.log(moviefun);
// console.log(moviefun.mvs); //mvs function will display
// document.write(moviefun.mvs()); //undefined

// function inside objec and acesss:
// ---------------------------------

function user(n, a) {
  this.name = n;
  this.age = a;
  this.data = function () {
    console.log(this.name + "" + "and  age is " + this.age);
  };
}

let user1 = new user("arun", 30);
// console.log(user1);
user1.data();

let user2 = new user("yamuna", 25);
user2.data();

// To iterate the object we use for in loop(. notation not working)
for (k in user1) {
  console.log("Iteration of obj", k + ":" + user1[k]);

  //To get the keys and values  & both of an object in array form

  console.log(Object.keys(user1));
  console.log(Object.values(user1));
  console.log(Object.entries(user1));
}
// objname.director = "srinu";
// console.log(objname);

// //adding the key:value pair into object
// const obj = { name: "Arun", age: 30 };
// console.log(obj);
// obj.gender = "male"; //. dot notation
// obj["company"] = "HCl"; // bracket notation
// console.log(obj);

// // 2.get the keys and values as array individually

// const data = {
//   name: "Arun",
//   age: 30,
//   company: "hcl",
// };
// // console.log(data);

// // console.log(Object.entries(data));
// //we get the  below output key and value as a array element indvidually
// // 0: (2) ['name', 'Arun']
// // 1: (2) ['age', 30]
// // 2: (2) ['company', 'hcl']
// // length: 3

// console.log(Object.values(data));
// //['Arun', 30, 'hcl'] --values as aarray
// console.log(Object.keys(data));
// // ['name', 'age', 'company']--keys as array

//************** */ change the value in the object***********************************

// let a = 10;
// console.log(a);
// a = 30;
// console.log(a);

// console.log(a);
// const obj = { a: 20, b: 30 };

// console.log((obj.b = 40));
// console.log(obj);

// // ******************************************************************
