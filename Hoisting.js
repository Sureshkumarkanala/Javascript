/* Hoisting-Means accessing the varaible or
 function even before initializing  a value to it*/
// for var- we get undefined in Hoisting
console.log("X value in Hoisting is", x); //undefined
var x;

console.log("X value in Hoisting is", x); //undefined
x = 10;

console.log(" X value in Hoisting is", x); //10
y = 100;

console.log("Y value in Hoisting is", y); //100
var y;

let z;
console.log("Z value in Hoisting is", z); //undefined

z = 200;
console.log("Z value in Hoisting is", z); //200

//Functions_1

// function test(a) {
//   return a * 20;
// }
// var obj = {
//   a: 30,
// };
// console.log(test(10)); //200
// console.log(obj.a); //30
// console.log(test(obj.a)); //600
// console.log(obj.test(obj.a)); //Output: Error(obj.test is not a function)

// //Correct
// console.log(test(obj.a)); //600
// console.log(obj.a); //30
// console.log(test()); //NaN- because no argument so function return NaN
// console.log(test(10)); //200
// ***********************************************************
//Currying_1

// var addNum = (a, b) => (c) => (d) => console.log(a + b);
// console.log(addNum(10, 10));

// // output:(c) => (d) => console.log(a + b)
// // after '=>' what ever is  there it will print the same

// var addNum = (a, b) => (c) => a + b;
// console.log(addNum(10, 10));

// output: (c) => a + b;
//correct
// var addNum = (a, b) => a + b;

// console.log(addNum(10, 10));
// output:  20
// ********************************************************

//Hoisting_1

// function test() {
//   // console.log(num); //Uncaught ReferenceError: num is not defined
//   if (true) {
//     // console.log(num); //Uncaught ReferenceError: Cannot access 'num' before initialization
//     let num = 10;
//     const num1 = 20;
//     let num2 = 30;
//     console.log(num); //10

//     {
//       console.log(num1); //20
//     }
//   }
//   console.log(num); //Uncaught ReferenceError: num is not defined
// }

// test();

// output: Uncaught ReferenceError: num is not defined

//correct

// var num = 100;
// function test() {
//   console.log(num);
//   if (true) {
//     let num = 10;
//     const num1 = 20;
//     var num2 = 30;

//     console.log(num);
//   }
//   console.log(num);
// }

// test();

//output:100 10 100

//Hoisting the var value
// console.log(n); //undefined
// var n = 100;
// console.log(n); //100
// function test() {
//   console.log(n); //undefined
//   if (true) {
//     var n = 10;
//     console.log(n); //10
//   }
//   console.log(n); //10
// }
// console.log(n); //100
// test();

// //Hoisting the let value
// console.log(num); //

// let num = 100;
// console.log(num); //100
// function test() {
//   console.log(num); //100
//   if (true) {
//     let num = 10;
//     console.log(num); //10
//   }
//   console.log(num); //10
// }
// console.log(num); //100
// test();

// ***************Before Intializationn*************
// var:Before Access
// console.log(y); //Undefined
// var y = 10;

// //let:Before Access
// console.log(a); //Cannot access 'a' before initialization
// let a = 11;

// // const:Before Access
// console.log(b); //Cannot access 'b' before initialization
// const b = 12;

// *******************************************************************
//Hoisting_Block_scope
// function test() {
//   console.log(num);
//   if (true) {
//     const num = 20;
//   }
//   console.log(num);
// }
// test();
// Expected :Error - Uncaught ReferenceError: num is not defined
// Reason:we declare the varable in if block but we are acessing out the block

//Correct
// function test() {
//   const nums = 200;
//   if (true) {
//     // const nums = 20;
//     {
//       console.log(nums);
//     }
//     console.log(nums);
//     {
//       console.log(nums);
//     }
//     console.log(nums);
//   }
//   console.log(nums);
// }

// test();

// ******************************************************************
// Hoisting_const_2
// function test() {
//   // console.log(num); //error
//   const num = 20;
//   if (true) {
//     const num = 30;
//   }
//   console.log(num); //20
// }

// test();

// Expected:Uncaught ReferenceError: Cannot access 'num' before initialization

//correct

// function test() {
//   const num = 20;
//   if (true) {
//     const num = 30;
//   }
//   console.log(num); //20
// }

// test();

// function test() {
//   const num = 20;
//   console.log(num); //20
//   if (true) {
//     const num = 30;
//   }
//   console.log(num); //20
// }

// test();

// ***********************************************************
// a = 10;
// function test() {
//   console.log(this); //window
//   console.log(this.a); //10
// }
// test();

// var obj = {
//   a: 20,
//   test: () => test(),
// };
// console.log(a);
