// //let :inside function
// let d = 10;
// function test() {
//   console.log(d); //10
// }
// test();

// let :inside function try to acess before intilaise
// console.log(g); //Uncaught ReferenceError: Cannot access 'g' before initialization
// let g = 13;
// function test() {
//   console.log(g); //13(After error CAN'T execute this line)
// }
// test();

//loop
// console.log("let loop", m);//Uncaught ReferenceError: m is not defined
// for (let m = 1; m < 5; m++) {
//   console.log("let loop", m); //1 2 3 4
// }
// console.log(m); //Uncaught ReferenceError: m is not defined

// for (let m = 1; m < 5; m++) {}
// console.log(m); //uncaught ReferenceError: m is not defined

for (let m = 1; m < 5; m++);
{
  console.log(m); //Uncaught ReferenceError: m is not defined because here we break the for loop
}
