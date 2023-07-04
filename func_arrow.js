//Normal function
// console.log(test); //Display total function
// // output:// ƒ test(a) {
// //   return a * 20;
// // }
// console.log(test()); //NaN
// function test(a) {
//   return a * 20;
// }
// var obj = {
//   a: 30,
// };

// document.write(test()); //NAN
//Normal when we try to acces  the function before we will get the whole function it self
// console.log(test);
// console.log(test(1)); //20

// function test(a) {
//   //Here This pointout the window obj
//   console.log(this);
//   return a * 20;
// }
// var obj = {
//   a: 30,
// };

// output:ƒ test(a) {
//     return a * 20;
//   }

//Arrow function
// console.log(test); //Undefined
// console.log(test()); //we can't acess before intilization we get "Uncaught TypeError: test is not a function" Error
// console.log(test(10)); //Uncaught TypeError: test is not a function
// var test = (a) => {
//   console.log(this);
//   return a * 20;
// };
// var obj = {
//   a: 30,
// };
// console.log(test); //Total function will display
// console.log(test()); //NAN
// console.log(test(1));

// //output:undefined

//Here Arrow function traeted as normal varaible
// console.log(test); //undefined
// test(); //Uncaught TypeError: test is not a function
// // console.log(test()); //Uncaught TypeError: test is not a function
// var test = (b) => {
//   return b * 20;
// };
// var obj = {
//   c: 30,
// };
// output:var_variable.js: Uncaught TypeError: test is not a function

//function declaration :Another type

// var getName2 = function (a) {
//   console.log(a);
// };
// getName2(10); //10
// getName2(); //undefined

// getName1(); //Uncaught TypeError: getName1 is not a function
// var getName1 = function (c) {
//   console.log(c);
// };

// console.log(getName3); //Undefined
// console.log(getName3()); //getName3 is not a function
// console.log(getName3(11)); //getName3 is not a function
// function getName3(b) {
//   console.log(this);
//   console.log(b);
// }
// getName3(1);
// getName3(11);

// 1.syntax

// function normal() {
//   console.log(arguments[0]); //10
// }
// normal(10, 20);

// let add = (m, n) => m * n;
// console.log(add(10, 20));

// 2.Argument binding
//we can't perform the argument binding by using arrow function

// let myFunc = {
//   num: 10,
//   showArg: function () {
//     console.log(arguments);
//   },
// };
// console.log(myFunc.num);
// myFunc.showArg(1, 2, 3, 4);

// let myArrow = {
//   Anum: 100,
//   Afuncarg: () => {
//     console.log(arguments); //arguments is not defined
//   },
// };
// console.log(myArrow.Anum);
// myArrow.Afuncarg(10, 20, 30, 40);

//3. using of new keyword
//we can't use new operator on Arrow this are callable but not costrutable
// but normal functions are constructable and callable
// function add(x, y) {
//   console.log(x + y);
// }
// new add(10, 20);
// new add(100, 200);

// let add1 = (x, y) => {
//   console.log(x + y);
// };
// new add1(10, 20); //add1 is not a constructor

//4.No Duplicate named parameters

// function params(x, x) {}
// params(18, 100);

// let par = (y, y) => {};
//Duplicate parameter name not allowed in this context

//5.This keyword

let obj = {
  name: "xyz",
  regfunction: function () {
    console.log(this.name);
  },
  Arrfunc: () => {
    return console.log("inside arrow", this.name);
  },
};
obj.regfunction(); //xyz
obj.Arrfunc(); //undefined
