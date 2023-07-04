// IMP: The of the this keyword is determine by calling context
// the way and which function is called

// when obj calls->pointing to the cally(obj)

//there is no cally context it will point to the window like function b()

//This keyword is point out the window objectconsole.log(this);
// this.name = "Suresh";
// console.log(this.name);
// console.log(window.name);
// Inside a function
//Inside the function also this keyword point out the window obj
// function checkthis() {
//   console.log(this);
// }
// checkthis();

//in obj this keyword not pint out the window object

// const person = {
//   //   checkthis: function () { // this is anonumus function
//   checkthis: function a() {
//     console.log(this);
//   },
//   fun: function b() {
//     console.log("inisde");
//   },
// };
// person.checkthis();
// person.fun();

//Here we call the function which is inside the obj-here every indiviual key:value is a function

// const person2 = {
//   //outer function
//   checkthis: function a() {
//     console.log(this);
//   },
// };
// person2.checkthis();

// const person2 = {
//   checkthis: function a() {
//     console.log(this);
//   },
// };
// // person2.checkthis();
// //here cally is obj so  this it point out to the obj
// // op: Object
// // checkthis: f a()

// const funvar = person2.checkthis;
// //here no calling context so this'console.log(this)' point out the window
// funvar();

//************************************************************************

//Nested function inside the object

// const person1 = {
//   //outer function
//   checkthis: function a() {
//     console.log(this); //cally(calling context is obj(person1)) is object  person1.checkthis() op: {checkthis: ƒ}
//     //inner function
//     function b() {
//       console.log(this); //window because no cally b(); op: window
//       console.log("inisde");

//       function c() {
//         console.log(this); // window
//         console.log("inisde b");
//       }
//       c(); //there is no calling context for the c function so it's pointout to window
//     }
//     //calling innner function inside the outer function
//     b();
//   },

//   anotherobj: function aa() {
//     console.log(this); //{checkthis: ƒ, anotherobj: ƒ}
//     console.log("another key value pair");
//   },
// };
// //calling the outer function
// person1.checkthis();
// person1.anotherobj();
// ** when we have 'n' number of key:value pairs.(all we get)

//

// ************overview*********************

// **********************************************************************
// names = "hi";
// // console.log(this); //point out the window
// console.log(names);
// console.log(this.names);
// console.log(window.names);

// //inside Funtion && function inside the function

// function a() {
//   console.log(this); //inside function also point the window
//   console.log(this.names);
//   function b() {
//     console.log(this);
//     console.log(this.names);
//   }
//   b();
// }
// a();

//inside obj & obj in fun
// let namevar = "hi";
// const namesobj = {
//   funone: function checkthis() {
//     console.log(this);
//   },
// };
// namesobj.funone(); //here cally is object so this pointout to the obj
// { {funone: ƒ}    funone: ƒ checkthis()}

// const x = namesobj.funone;
// x(); //there is no cally context it will point to the window-> window{}

//By using the value

// age = 100;
// const thisobj = {
//   valobj: function z() {
//     this.age = 20;
//     console.log(this); //points to obj(thisobj)
//     console.log(this.age); //20
//     function y() {
//       console.log(this); //points to  window

//       console.log(this.age); //100
//     }
//     y();
//     console.log(this.age); //20-obj z
//     console.log(window.age); //10-window
//   },
// };

// thisobj.valobj();
// // console.log(this.age); //window
// // console.log(window.age); //window

//Use Strict keyword
//it will remove the 'this' to point out the window object
//so when we use normaly also it point out to the object not window

// const strictuse = {
//   strick1: function add() {
//     "use strict";
//     this.job = "ACD";
//     console.log(this.job);
//     function sub() {
//       console.log(job);
//       console.log(this); //here this will not point to the window
//       this.aa = "dfdf"; //here we can't assign the value for undefined
//       console.log(this.job); // TypeError: Cannot read properties of undefined (reading 'job')
//     }
//     console.log(this.job);
//     sub();
//   },
// };
// strictuse.strick1();

//By assign the this to varaible(let variable)

const assvar = {
  usevar: function zz() {
    let self = this;
    console.log(self); //{usevar: ƒ}

    function xy() {
      console.log(self); //here previously it poin out to the window because no cally
      //but now pointing to the obj {usevar: ƒ}
    }
    xy(); //{usevar: ƒ}
  },
};
assvar.usevar();
