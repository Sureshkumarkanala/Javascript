//Var we can declare with same name and assign the value for n number of times ann access
// var a = 10;
// console.log(a);
// var a = 100;
// console.log(a);
// a = 1000;
// console.log(a);

//let for let we can assgin the values n times but we can't redeclare the variable .

// let b = 10;
// console.log(b); //10

// b = 100;
// console.log(b); //100

// let b = 1000;
// console.log(b);
//Uncaught SyntaxError: Identifier 'b' has already been declared

//Const we can't redclare and assign the variable only on time otherwise we get the error

// const c = 1000;
// console.log(c);

// *****************Inside the functions*************************

// var d = 100;
// function val() {
//   console.log(d); //100
// }
// val();

// var e = 1;
// function val(f) {
//   e = 22;
//   console.log(f); //100
//   console.log(e); //22 -If we not define e inside function we will get '1'
// }
// val(100);

// let f = 111;
// function fnum() {
//   f = 10;
//   console.log(f); //10 -if we not assign any value we will get 111
// }

// fnum();

// const cons = 1000;
// function constant(element) {
//   //   cons = 11111; //Uncaught TypeError: Assignment to constant variable.
//   console.log(element); //111
//   console.log(cons); //1000
// }
// constant(111);
