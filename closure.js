// function  is defined inside of the another function
//that inner function has  acess the variable or scope of the outer function even if the outer
//function finishs it's execution and variables no longer accessible outside the function

//OR
// A closure is the combination of a function bundled together with references to it's surrounding

//OR

// a closure is gives you access to an outerfunction's scope from an inner
//OR
//Accesing the varibles of a function even it's execution or out of it's scope

//OR
//inner function has acess to the outer function variables or functions
// even after outer function terminated
//
// const x = 10;

// function a() {
//   console.log(x);
// }

// function outer() {
//   let name = "Arun";
//   function inner() {
//     console.log("my name is ", name);
//   }
//   function deepinner() {
//     console.log("deep inside ", name);
//   }
//   inner();
//   deepinner();
// }
// let cls = outer();

// ex1:
// ----
//we have to retrun at 2 nd fucntion declaration

// function outer(n1) {
//   // let count = 0;
//   console.log(n1);
//   return function inner(n2) {
//     // count++;
//     // console.log(count);
//     console.log(n2);
//     console.log(n1 + n2);
//   };
// }
// // outer();
// let cls = outer(7);
// // let cls1 = outer();

// // cls(8);
// cls(10);
// // cls();
// // cls1();

// // let cls1 = outer();

function outside() {
  let count = 0;
  return function inside() {
    count = count + 1;
    console.log(count);
  };
}
console.log("outer function", outside);
let clss = outside();
clss();
console.log("inner function", clss);
let clss1 = outside();
clss1();
