// function a() {
//   function b(val) {
//     console.log(val);
//   }
//   console.log(val); //Error Uncaught ReferenceError: val is not defined
// }
// a();

// function a() {
//   var val = 10;
//   function b(val) {
//     console.log(val); //undefined
//   }
//   b();
//   console.log(val); //10
// }
// a();

// function a() {
//   var val = 10;
//   function b() {
//     console.log(val); //10
//   }
//   b();
//   console.log(val); //10
// }
// a();

//Nested function inside the object

// const person1 = {
//   //outer function
//   checkthis: function a() {
//     console.log(this);
//     //inner function
//     function b() {
//       console.log("inisde");
//     }
//     //calling innner function inside the outer function
//     b();
//   },
// };
// //calling the outer function
// person1.checkthis();
