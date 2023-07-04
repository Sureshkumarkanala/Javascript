//Classes are introduced in ES6
//This are allows us to create a blueprint based on blue print  , we can create a instantible   objects.
//this are syntactic sugar of function constructor and prototypal inheritence

// one way: by using class declartion
//every function should have constructor funtion
//when ever we instance of class this constructor function will called for object

class Personone {
  constructor(name, age, birthyear, gen) {
    this.name = name;
    this.age = age;
    this.birthyear = birthyear;
    this.gender = gen;
    this.calcage = function () {
      return (age = new Date().getFullYear() - this.birthyear);
    };
  }
}

let Arun = new Personone("Arun", 30, 1991, "male");
console.log(Arun);
console.log(Arun.calcage());

//using proto
//When we write outside the constructor that method or property should not be attached to the object

class Persononeproto {
  constructor(name, age, birthyear, gen) {
    this.name = name;
    this.age = age;
    this.birthyear = birthyear;
    this.gender = gen;
  }
  calcage = () => {
    var agee = new Date().getFullYear() - this.birthyear;
    return agee;
  };
}

Persononeproto.prototype.wish = function () {
  console.log("Good morning" + this.name);
};
Persononeproto.prototype.wisharrow = (name) => {
  console.log("Good morning" + name);
};

let Suresh = new Persononeproto("Suresh", 30, 1991, "male");

console.log(Suresh.calcage());

Persononeproto.prototype == Suresh.__proto__; //true
Suresh.wisharrow("Suresh");
Suresh.wish();

//here  Suresh object inheriting the calcage,wish methods from personproto object

//second way : class expression

// let person = class {};

//Classes can't be hoisted
//Just like functions ,classes are first class citizen
//classes are executed in strict mode(If not in strict mode also)
