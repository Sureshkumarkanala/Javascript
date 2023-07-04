//   function definition:
//   ----------------------
function def() {}
// we can store the result of function into a variable AudioScheduledSourceNode

function sub(a, b) {
  return (result = a - b);
}
// document.write(sub(10, 20));
let subresult = sub(10, 5);
// console.log(subresult);

// // function calling:
// // -----------------
console.log(def());
// when we didn't mention the return in the function we get undefined as a result

//   function expression:
//   -------------------
// Assign a function to  a vriable is called   function expression.
//without return we get undefined
// we call the function  by using the variable along with parameters.

// let x = function sum(a, b) {
//   var c = a + b;
//   console.log(c);
//   document.write(c);
//   return a;
// };
// console.log(x(20, 30));

// const z = {
//   a: 5,
// };

//Types of functions
// 1.Named functions

// 2.Anonymous function

// 3.Immediate Invoked function expression

// 4.Arrow function

// 1.Named function:
// ------------------
// function with the name is called named function
// function max(n1, n2) {
//   if (n1 > n2) {
//     console.log("n1 is bigger");
//   } else console.log("n2 is bigger");
// }
// max(10, 20);

// Anonymous function:
// ------------------
// A function without the name is called Anonymous function
// it has to assign to any variable(function expression)

// maxx = function (n1, n2, n3) {
//   if ((n1 < n2) & (n3 < n2)) {
//     console.log("n2 is bigger");
//     // return "n2 is bigger";
//   } else if (n2 < n3 && n1 < n3) {
//     console.log("n3 is bigger");
//     // return "n3 is bigger";
//   } else console.log("n1 is bigger");
//   //   return "n1 is bigger";
// };
// console.log(maxx);
// console.log(maxx(100, 20, 30)); //undefined-Without return
// document.write(maxx(100, 20, 30)); //undefined-not return from the function(if no returnin  function)
// console.log(maxx);//prints the total function

// IIFE(immediate invoked function expression):
// --------------------------------------------

// There is code reusability for this  it will excute at function declaration.
//we have to keep function definition in the paranthesis() and execute the function().
// it will run only one time in the program
//we have the result in one variable
// var product = (function mul(a, b) {
//   return a * b;
// })(4, 3);
// console.log(product);

// Arrow function:
// ---------------

// if only one statement 'return' not required
// if one parameter    curly braces also not required

// const price = (value, gst) => value + gst;
// document.write(price(400, 40));

// const alltax = (tax) => tax * tax;

// // return 10}

// console.log(alltax(20));

// // alltax();
// const display = (_) => console.log("arrow without ()");
// display();

// For arrow and Anonymus functions we can't call this directly we need assign to any variable and call that particulr variable
