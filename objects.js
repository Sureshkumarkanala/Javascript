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

// 2.using new keyowrd(Singalton object) with object constructor or Object constructor :
// -------------------------------------------------------------------------------------

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

// let obj={
//   name:"Arun",
//   age:30
//   }
//   console.log(obj['name']);

// let obj = {
//   name: "Arun",
//   "age of person": 30,
// };
// console.log(obj.age); //it won't work we get error
// console.log(obj["age of person"]);

//this is the way acess the symbol inside obj

// company = Symbol("HCLL");
// let obj = {
//   name: "Arun",
//   "age of person": 30,
//   [company]: "HCL",
// };
// console.log(obj.age); //it won't work we get error
// console.log(obj["age of person"]);
// console.log(obj[company]); //this is the way acess the symbol inside obj
// console.log(obj.company); //it won't work

//To restrict the changes in the object by using the freez method

// let obj1 = {
//   name: "Arun",
//   "age of person": 30,
// };
// console.log(obj1.age);
// console.log(obj1["age of person"]);
// Object.freeze(obj1);
// obj1.name = "Suresh";
// console.log(obj1); //Name was not changed

//using return in object with function

// const objfun= function a(){
//   console.log("function inside object");
//   }
//   /* console.log(objfun.a);//undefined */
//   /* console.log(objfun()); */
//   objfun();//function inisde object

//   console.log("in console",objfun());//undefined

//   const objfun1= function a(){
//   console.log("function inside object with return");
//   return "function inside object with return";
//   }

//   console.log("in console",objfun1());//function inside object with return

// objfun2={
//   name:"Arun",
//   age:30,
//   company:"HCL"
//   }

//    objfun2.greet= function (){
//   console.log("Hello function")
//   }
//   /* console.log("Acess obj",objfun2.greet);//function returned(total function will come here) */

//   /*
//   console.log("in console",objfun2.greet());//undefined because no return */

//   //acess the object values  here
//   objfun2.greeting= function (){
//   console.log(`Hello function${this.name}`)
//   }

//   console.log("console",objfun2.greeting());//function will execute but we will get undefined becaurse no return

//   console.log("console",objfun2.greeting);

// Object.assign,spred operator:
// -----------------------------

const obj11 = { 1: "a", 2: "b", isLoggedin: true };
const obj22 = { 3: "c", 4: "d", isLoggedin: false };
const obj33 = { 5: "e", 6: "f", isLoggedin: true };

// /* console.log(obj11,obj22);//{{1:"a",2:b},{3:"c",4:"d"}}
// const obj44=Object.assign({},obj11,obj22,obj33);
// console.log(obj44);

const obj55 = { ...obj11, ...obj22, ...obj32 };
console.log(obj55);
const obj66 = { obj11, obj22, obj33 };
console.log("obj6", obj6);

const obj77 = Object.assign(obj1, obj2, obj3);
console.log("obj77", obj77); //here if key same will overwrite

//Problem with Assign,spread
// ----------------------------

const obj1 = { 1: "a", 2: "b", isLoggedin: true };
const obj2 = { 1: "c", 2: "d", isLoggedin: false };
const obj3 = { 1: "e", 2: "f", isLoggedin: true };

/* console.log(obj1,obj2);//{{1:"a",2:b},{3:"c",4:"d"}}
const obj4=Object.assign({},obj1,obj2,obj3);
console.log(obj4);

 */ const obj5 = { ...obj1, ...obj2, ...obj3 };
console.log(obj5);

// output:

// "obj7", "obj7", {
//   1: "e",
//   2: "f",
//   isLoggedin: true
// }

const obj6 = { obj1, obj2, obj3 };
console.log(obj6);

// output:
// ------

// "obj6", {
//   obj1: {
//     1: "a",
//     2: "b",
//     isLoggedin: true
//   },
//   obj2: {
//     1: "c",
//     2: "d",
//     isLoggedin: false
//   },
//   obj3: {
//     1: "e",
//     2: "f",
//     isLoggedin: true
//   }
// }

const obj7 = Object.assign(obj1, obj2, obj3);
console.log("obj7", obj7); //here if key same will overwrite

// output:

// "obj7", "obj7", {
//   1: "e",
//   2: "f",
//   isLoggedin: true
// }

const objperson = {
  name: "Arun",
  age: 30,
  company: "HCL",
  address: "bglr",
};
let x = Object.keys(objperson);
let y = Object.values(objperson);
let z = Object.entries(objperson);

console.log(x); //["name","age","company","address"]
console.log(y); //["Arun",30,"HCL","bglr"]
console.log(z); //[["name","Arun"],["age",30],["company","HCL"],["address","bglr"]]

//To find the key value exixt or not

console.log(objperson.hasOwnProperty("name")); //true

const objperson1 = {
  name: "Arun",
  age: 30,
  company: "HCL",
  address: {
    city: "bglr",
    state: "KA",
  },
};

// const {address}=objperson1;
// console.log(addrss);

//{
//   city: "bglr",
//   state: "KA"
// }

// const {address: A}=objperson1;
// console.log(A);
//{
//   city: "bglr",
//   state: "KA"
// }

let p = Object.keys(objperson1);
let q = Object.values(objperson1);
let r = Object.entries(objperson1);

console.log(p); //["name","age","company","address"]
console.log(q); //["Arun",30,"HCL",{city:"bglr",state:"KA"}]
console.log(r); //[["name","Arun"],["age",30],["company","HCL"],["address",{city:"bglr",state:"KA"}]]
