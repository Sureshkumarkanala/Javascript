console.log("inside rest and spread");

// rest operator-use i called function and it's saperarte values to grouping

function remain(a, b) {
  console.log(a, b);
}
remain(1, 2, 3, 4);

//Here remaining values are not displayed

function remain1(a, b, ...x) {
  console.log(a, b, x); //1 2 (4) [3, 4, 5, 6]

  let y = x;
  console.log(y); //[3, 4, 5, 6]
}
remain1(1, 2, 3, 4, 5, 6);

//Remaining values are converted as an array and rest operator should be last parameter .

//Spread operator-used in calling function-group of element to saperate
//we are converting the array in to list of items

a = [1, 3, 5, 7, 9, 0];
b = [2, 4, 6, 8];
let c = [...a, ...b];
console.log(c);

// For object-Spread operator

let obj = {
  name: "Arun",
  age: 31,
};
let obj1 = {
  company: "L&T",
  location: "Bangalore",
};

person = {
  ...obj,
  ...obj1,
};
// console.log(person);
let d = obj.name;
// person1 = {obj.name};//Eror we can't directly assign singal key value in to another obj
// console.log(obj.name);
person2 = { d };
// console.log(d);
person1 = obj.name;
console.log(person1);

// console.log(person1.obj.name);
// console.log(person1);
// console.log(person1.person.name);
