// Constructor  function(first letter must be capital) which creates a object  with simillar properties of functionallity for us
//when we use the new keyword function create a object inside function and assign it to this
//const this={}--> like this
//Constructor  function is a function which is act as a pattern or a template for creating a object
// OR
//Constructor  function ( Regular function or function expression )acts like a  Blueprint and used to create instances and implement inheritance.

//Function
function person(name) {
  this.name = name;
  return this;
}
const name1 = new person("Arun");
console.log(name1); // we get the object with person:{name:"Arun"}
console.log(name1.name); //Arun

// Function expression

const Person1 = function (name, yearofBirth, occupation) {
  this.name = name;
  this.yearofBirth = yearofBirth;
  this.occupation = occupation;
  this.calculateage = function () {
    var curentyear = new Date().getFullYear();
    console.log(curentyear);
    var age = curentyear - this.yearofBirth;
    console.log(age);

    return age;
  };
};

var suresh = new Person1("Suresh", 1990, "NA");
console.log(suresh);

console.log(suresh.calculateage());
var Arun = new Person1("Arun", 1990, "SE");

// Suresh object is the instance of the this person1 function Constructor

//Prototype constructor inheritence

//Inheritance is when one object is based on another object i.e, when one object gets access to the peoperties  and
// methods of another object- in jS we implement inheritence by using the prototype

//Prototype-Each and every JS object has a prototype property
//prototype is the mechanism in js inherit feature from one object to another object.
//object instances(all the objects) are also access the prototype property of the constructor function.

//IN above situation for every object constructor function will create the calculateage function, and it will
// call for every Object, if we don't want the function for some other objects also it will create defult
// to overcame the unnecessary creation of a function we need to assign the calculateage function for prototype property
// of constructor function

const personproto = function (name, age, DOByear) {
  this.name = name;
  this.age = age;
  this.DOByear = DOByear;
};

personproto.prototype.calculateage = function () {
  var currentyear = new Date().getFullYear();
  console.log(currentyear);
  var age = currentyear - this.DOByear;
  return age;
};

const yamuna = new personproto("yamuna", 27, 1997);
console.log(yamuna);
console.log(yamuna.calculateage());

personproto.prototype === yamuna.__proto__; //true
