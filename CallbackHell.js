// Actually jS is a synchronous programing language
// To make it  asynchronus we use the callback
// the best ex for  call back is setTimeout()- here it will execute after some time

// callback functions:

// sending a function as a paramter/argument to the another function is called callback function.

// function myfunc(call) {
//   console.log(call(), "This is my function");
// }

// function callback() {
//   console.log("This is callback funtion");
//   return "called";
// }
// myfunc(callback);

//without return:

// This is callback funtion
// undefined This is my function

//with return:

// This is callback funtion
// called This is my function

// Parameter to the callback function

// here we passing the parameter in the callback function and it's execution in the main function

function fun(val) {
  console.log(val);
  console.log(" in callback ", val(20));
}

fun(function value(val) {
  console.log("this is call back function with value");
  console.log("callback console", val);
  return val;
});

// ------------------------------------------------------------------------------------------------------------------
// Problem : Here we give the control of the one function to another function(Inversion control)

// one function is depend on the other function execution if it's happening continously is called as callback Hell.

// 1 - Callback hell
// When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
// This grows the code horizontally instead of vertically. That mechanism is known as callback hell.

// To overcome the problem with callbackHell in JS by using promises

// function say(a) {
//   console.log("inside say");
//   console.log(a);
//   a();
// }
// say(function () {
//   console.log("Hello");
// });
// -----------------------------------------------

// function bakeCake() {
//   console.log("cake prepararion");
//   setTimeout(function () {
//     console.log("preheat oven");
//     setTimeout(function () {
//       console.log("Mix the ingredients");
//       setTimeout(function () {
//         console.log("pour butter into a baking pan");
//         setTimeout(function () {
//           console.log("put the pan in the ovan");
//           setTimeout(function () {
//             console.log("Bake for 5 min");
//             setTimeout(function () {
//               console.log("take the pan out from the oven");
//               setTimeout(function () {
//                 console.log(" cake is ready");
//               }, 1000);
//             }, 5000);
//           }, 5000);
//         }, 5000);
//       }, 5000);
//     }, 5000);
//   }, 5000);
// }

// bakeCake();
