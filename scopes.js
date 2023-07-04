// 1.Global Scope
// If we delcare the any variable outside the function,block{}, that varable declaration consider as Globalscope
// we can access that any where in page/component(inside function also)

// 2.Functional Scope
// 3.block Scope{}

//Lexical environment:
// ----------------------
//when creation of any Scope (any) lexical environment will be created by the js run time machine
//contains all the variables and functions in current scope & reference to it's parent lexical environment

// ***********************Var in all scopes**************************

//global-if declare globally Var-we can redeclare and reassgin the variable in function,fun block and block
//  but when we execute the function() at first line function , fun block undefined

//block scope- if declare in block-var-we will get undefined in  global(first blobal next global),acess function,fun block ,block acessable( first  block then function())
//but if execute the  first function() then  block except block all scopes undefined

//if function we declare-acess in funblock,fun block and  error in global and block

// if declare in fun block-function undefined(if fun block also afunction(inner one()) then error in function block) ,fun block acess,error at global and  block

//function() excute after declatarion we get the value other wise undefined
// var a = 10;
// var a = 1111111;
// console.log("global var a", a);
function one() {
  // var a = 100;
  console.log("function  var a", a);
  // function innerone() {
  {
    var a = 1000;
    console.log(" fun block var  a", a);
  }
  // }
  // innerone();
}

// {
// var a = 10000;
// console.log("block var a", a);
// }
one();

// **********************Let Variable in all scopes*********************
//Globally-we can acess in all the scopes-if we run () before declaration we get ReferenceError(Cannot access 'b' before initialization)
//block-inside the block only
//funtion- we can access inside function, fun block only.
//fun block-inside fun block only
// let-we can reassgin but we can't redeclare the varaible in globally

// two();

// // let b = 20;
// // b = 500;
// // console.log("global let  b", b);
// {
//   // let b = 20000;
//   // console.log(" block  let b", b);
// }
// function two() {
//   // let b = 200;
//   console.log("inside the function let  b", b);
//   {
//     let b = 2000;
//     console.log("inside the fun block let  b", b);
//   }
// }

// ***************Const in all scopes******************

// const-we can't redeclare and reassign the variable in in globally and any other scope also
//global-we can access any where in program
//block -we can acess only inside block
//function-we can acess inside funtion , fun block only
//fun block-we can access inside fun block only

// const c = 3;
// // c = 40;//Uncaught TypeError: Assignment to constant variable.
// console.log("global const c", c);

// function three() {
//   // var c = 300;
//   // console.log("function  const c", c);
//   function inner() {
//     const c = 3000;
//     console.log("fun block const c", c);
//     function deepinner() {
//       console.log("deep inner block const c", c);
//     }
//     deepinner();
//   }

//   inner();
// }
// {
//   const c = 30;
//   console.log("block const c", c);
// }

// three();

// **************functional scope*********************
//define any variable inside the function we can access only inside the function
//we try to access outside function scope we get error

// ******************************************************************************
//Block Scope of the varaibles

//Block scopes means in between "{}"" is called block scope
// let and const have block scope

// check the scope for var and let const

//Temporal deadzone
//when we declare the variable as let  or const before execute the first line
//this varables are decalred in the script zone(memory allocation) when the value is
//initalize after some time--the time between declare and initialize is called Temporal deadzone

// var a = 1000;//global scope
// {
//   var a = 10;( "a" is shadowing) a value 10 is shadowing the 1000
//   console.log(a); //10
// }

// console.log(a); //10

//let

// let b = 1000; //-->variable available in script scope in backend
// {
//   let b = 10;
//   console.log(b); //10-->variable available in block scope in backend
//   //b value 10 is shadowing the value 1000
// }

// console.log(b); //1000

//const

// const x = 100; //script scope
// {
//   const x = 1;
//   console.log(x); //1 - value 1 is shadowing the value 100 block scope
// }
// console.log(x); //100

//var-let

// var a = 10;
// {
//   let a = 100;
//   console.log(a); //100
// }
// console.log(a); //10

// ********Illegal shadowing let-var*******
// (global & block only exist)
// Error:
//  Uncaught SyntaxError: Identifier 'b' has already been declared (at scopes.js:54:7)
// let b = 10;
// {
//   var b = 100;
//   console.log(b); //100
// }
// console.log(b); //10

// ***************Functional shadowing or scope work same as varaible********
//Var

// var x = 100;
// function aa() {
//   var x = 10; //10
//   console.log(x);
//   {
//type1
// console.log(x); //10

//type2
//     var x = 1000;
//     console.log(x); //1000

//type 3
// console.log(x); //10
// x = 111;
// console.log(x); //111
//   }
// }
// aa();
// console.log(x); //100

// let
// let x = 100;
// function aa() {
//   let x = 10; //10
//   console.log(x);
//   {
//type1
// console.log(x); //10
//type2
// let x = 1000;
// console.log(x); //1000(if not assign the value  we will get 10)

//type 3
// console.log(x); //We get error-Cannot access 'x' before initialization
// let x = 1000;
// console.log(x); //1000(if not assign the value  we will get 10)
//   }
// }
// aa();
// console.log(x); //100

//const

// const c = 1000;
{
  //type1
  //   console.log(c);

  //type2

  // const c = 1;
  //   console.log(c); //1

  //type3
  //   console.log(c); //Cannot access 'c' before initialization
  //   const c = 1;
  //   console.log(c);

  //type4-1
  {
    // const c = 11111;
    // console.log(c); //11111
    //type4-2
    // console.log(c); //1000
  }
}
// console.log(c);
