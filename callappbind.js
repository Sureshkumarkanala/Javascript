//function declaration

// function a() {
//   console.log("this is function declaration");
// }
// a();

// //function expression

// const b = function x() {
//   console.log("this is function expression   ");
// };
// b();

// *******************insimple format*******************

// *********call******************

// By using the 'call' we will do the function barrowing
// we can Barrow functions from other objects and use it with the data of some other objects.
// call: to stabulise the context of this keyword.
//                      OR

// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// With call(), an object can use a method belonging to another object.

// const person = {
//   fullname: function (firstname, lastname) {
//     return this.firstname + "" + this.lastname;
//   },
// };

// const person1 = {
//   firstname: "Suresh",
//   lastname: "kumar",
//   others: "",
// };
// const person2 = {
//   firstname: "aaa",
//   lastname: "vvvvv",
// };

// console.log(person.fullname.call(person1), "good");
// console.log("person1 ", person.fullname.call(person1));
// var x = person.fullname.apply(person1[("hi", "good")]);
// console.log("person apply", x);
//   console.log("person1",person.fullname.call(person1));
//   console.log("person2",person.fullname.call(person2));

//   -----------------------------
// It can be used to invoke (call) a method with an owner object as an argument (parameter).

const obj = { name: "KSK" };

let fname = function (a, b) {
  console.log(obj);
  console.log(a);
  console.log(b);

  return `${a} ${obj.name}. ${b} `;
};
console.log(fname.call(obj, "hi", "gd noon"));

function add(a, b) {
  return a + b;
}
console.log(add(2, 2));

// // ***************Apply****************
// Apply() Function:
// -----------------

// work like same as call  1st argument as a object and 2 argument as ArrayList which needs
// to be passed to   .

// const obj = { num: 2 };

// const Numbers = function (a, b) {
//   return this.num + a + b;
// };
// console.log(Numbers.call(obj, 5, 10));
// const AllNum = Numbers.apply(obj, [10, 20]);
// console.log(AllNum);

// -----------------------------------

// // ************bind*****

// Bind same as call, instead of Directly calling the call method,
// it will return the copy of the method and use it later.

// const obj = { num: 5 };

// const Numbers = function (a, b) {
//   return this.num + a + b;
// };

// // console.log(Numbers.call(obj,5,10));
// // const AllNum=Numbers.apply(obj,[10,20]);
// // console.log(AllNum);

// const AllNumbers = Numbers.bind(obj, 10, 100);
// // console.log(Numbers.bind(obj, 10, 100));
// console.log(AllNumbers());

// **************************************************************************************

// // "useStrict"- mode will make undefined of window object of this keyword
// //this keyword refers the window object but usestrict make it as undefined

// // call: to stabulise the context of this keyword.
// "use strict";
// // function checkthis() {
// //   console.log(this);
// // }
// //  checkthis(); //it refer window obj(with out strict mode)
// // checkthis(10); // this refer to window only (no value we will get)

// // checkthis(); //with strict mode 'undefined'
// // checkthis.call(1); //with strict mode value is '1'

// // const person = {
// //   checkthis: function () {
// //     console.log(this);
// //     function checkthisagain() {
// //       console.log(this);
// //     }
// //     // checkthisagain(this); //pointing to the 'undefined'

// //     checkthisagain.call(this); //pointing to the this
// //   },
// // };

// // person.checkthis.call("This is");

// //without Arguments
// let name = {
//   firstname: "Arun",
//   lastname: "Suresh",
// };

// let fullname = function () {
//   console.log(`${this.firstname}  ${this.lastname}`);
// };
// fullname.call(name);

// //with Arguments

// let fullname1 = function (arg1, arg2) {
//   console.log(
//     `${this.firstname}  ${this.lastname} and qualification is ${arg1} age is ${arg2}`
//   );
// };

// fullname1.call(name, "B.tech", "30");

// //Apply same as call passing the arguments as array

// // fullname1.apply(name, ["M.tech", "45"]);
// const arr = ["M.tech", "45"];
// fullname1.apply(name, arr);

// //bind method

// // previously call and apply when we want to context of the this by call the function
// // bind will help us to apply the conntext of this during  expression

// //bind is used to set the context of 'this' during the function expression
// //we cant use the bind during the functio declaration

// // **syntax error(function declaration)
// //  function () {
// //     console.log(this);
// //   }.bind()); //syntax error

// // **************************
// // let a = function () {
// //   console.log(this);
// // };
// // a(); //undefined

// // let aa = function () {
// //   console.log(this);
// //   // }.bind();//undefined
// // }.bind({}); //{}

// // aa();

// let a = function () {
//   console.log(this);
// }.bind(1);
// a();

// let employee = {
//   checkid: a,
//   checkthisagain: function () {
//     console.log(this);
//   },
// };
// employee.checkid();
// employee.checkthisagain();

// // const personfullname = function () {

// //     checkthis(){
// //   console.log(this);
// //     }
// // }.bind({ a: 1, b: 2 });

// // const per = {
// //   fname: "Arun",
// //   lname: "Kumar",
// // };
// // personfullname.per();

//******************************************************************************/
// const person = {
//   fullname: function (fname, lname, age) {
//     // console.log(x);
//     return `first name is ${this.fname} and last name is ${this.lname} age is ${this.age} `;
//   },
// };
// const person1 = {
//   fname: "Arun",
//   lname: "kumar",
//   age: 30,
// };
// const person2 = {
//   fname: "Suresh",
//   lname: "Kumar",
//   age: 30,
// };
// console.log(person.fullname.call(person1), "good");
// console.log(person.fullname.call(person1), "good evening");
// // console.log(person.fullname.call(person2));
// console.log(person.fullname.apply(person2), ["hi"]);

// const f = person.fullname.bind(person1);
// const m = person.fullname.bind(person2);
// console.log("bind", m());

// console.log(f());
