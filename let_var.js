//let :inside function
// let d = 10;
// function test() {
//   console.log(d); //10
// }
// test();

// let :inside function try to acess before initialize
// console.log(g); //Uncaught ReferenceError: Cannot access 'g' before initialization
// let g = 13;
// function test() {
//   console.log(g); //13(After error CAN'T execute this line)
// }
// test();

//loop
// console.log("let loop", m); //Uncaught ReferenceError: m is not defined
// for (let m = 1; m < 5; m++) {
// console.log("let loop", m); //1 2 3 4
// }
// console.log(m); //Uncaught ReferenceError: m is not defined

// for (let m = 1; m < 5; m++) {}
// console.log(m); //uncaught ReferenceError: m is not defined

// for (let m = 1; m < 5; m++);
// {
//   console.log(m); //Uncaught ReferenceError: m is not defined because here we break the for loop
// }

// for (var m = 1; m < 5; m++) {
//   console.log("var loop inside", m); //1 2 3 4
// }
// console.log("var loop outside", m); //5

// for (let m = 1; m < 5; m++) {
//   console.log("let loop inside", m); //1 2 3 4
// }
// console.log("let  loop outside", m); // m not defined

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
//55555( 5 times 5)- because  define with var it will hoist in the global space

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
//0,1,2,3, 4 - because let have block scope for eact iteration diff value in setTimeout function(closure)
