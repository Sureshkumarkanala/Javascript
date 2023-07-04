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

//Closures

// function a() {
//   var x = 10;
//   function b() {
//     console.log(x);
//   }
//   b();
// }
// a();

// const a = {
//   who: "good morning",
//   greet() {
//     return `hi ${this.who}`;
//   },
//   farewall: () => {
//     return `bye ${this.who}`;
//   },
// };
// console.log(a.greet());
// console.log(a.farewall());

// (function immediateA(a) {
//   return function immediateB(b) {
//     console.log("value is ", a);
//   };
// },
//   console.log(1(16)));
