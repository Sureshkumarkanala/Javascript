// console.log("Hi");
// console.log(m);
// var m = 13;
// function test() {
//   console.log(m); //13
// }
// test();

// var :inside function
// var c = 13;
// function test() {
//   console.log(c); //13
// }
// test();

//var :inside function try to acess before intilaise

//Loops
// console.log("var loop", i); //undefined
for (var i = 1; i <= 5; i++) {
  console.log("var loop", i); //1 2 3 4
}
console.log(i); //6(if =present condition+1)

for (var j = 0; j < 4; j++) {
  console.log(j); //0 1 2 3
}
console.log(j); //4

// ***********Break the for loop to Var*************

// for (var k = 0; k < 5; k++);
// {
// }
// console.log(k); //5

// for (var i = 0; i < 5; i++) {
//   console.log(i); //0 1 2 3 4
// }
// console.log(i); //5

for (var i = 0; i < 5; i++);
{
  console.log(i); //5--Here we break  the for loop";""
}
console.log(i); //5
