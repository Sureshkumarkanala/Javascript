// There are two types of copies are there
//https://www.youtube.com/watch?v=E3dboLSBeJc&list=PL0pWi_-ba0OmB41lsIuxmj5aLywSfq78h&index=2
// 1. Shallow copy
// 2. Deep copy

//Shallow copy-When a reference variable is copied into the new variable,the same memory address allocates to the reference variable also.

console.log("copy types");

// shalow copy- here for array/ object it will stores the address of it and if we change  the value
// of it automatically change the second one also

// const arr1 = ["Hi", "bye"];
// arr2 = arr1;
// console.log(arr1);
// console.log(arr2);

// arr1[0] = "good";
// console.log(arr2);
// console.log(arr1);
// // in above ex when we change the value of the arr1[0] it automatically change the value in arr2 also
// // because here arr1,arr2 have the same address  this is called shallow copy

//Deep copy

// const arr3 = ["Hi", "bye"];
// arr4 = [...arr3];
// console.log(arr3);
// console.log(arr4);

// arr3[0] = "good";
// console.log(arr3);
// console.log(arr4);

// ------------------------------------------------------------------------------------

// const obj1 = {
//   name: "suresh",
//   age: "32",
// };
// const obj2 = obj1;
// console.log(obj1);
// console.log(obj2);
// obj1.name = "arun";
// console.log(obj1);
// console.log(obj2);

// in above ex when we change the value of the obj.name it automatically change the value in obj1 also
// because here obj2,obj1 have the same address this is called shallow copy

//Deep copy

// type1:
// -------
// const obj3 = {
//   name: "suresh",
//   age: "32",
// };
// const obj4 = { ...obj3 };
// console.log(obj3);
// console.log(obj4);
// obj4.name = "arunkumar";
// console.log(obj3);
// console.log(obj4);

//BY Using the assign method we can add n number of object properties in to singal object.
// type2:
// ---------
dev1 = { skill: "JS" };
dev3 = { name: "arun" };
dev2 = dev1;
// console.log(dev1);
// console.log(dev2);
dev2 = Object.assign({}, dev1, dev2);
dev2.skill = "RJS";
dev2.name = "suresh";

console.log(dev1);
console.log(dev2);

// spread operator and Object.assign won't work for the nested objects

// emp1 = {
//   name: "arun",
//   company: "Gen&art",
//   skills: {
//     one: "axios",
//     two: "JS",
//   },
// };
// const emp2 = { ...emp1 };
// emp2.name = "suresh";
// emp2.skills.one = "react";
// console.log(emp1);
// console.log(emp2);

//To resolve this we use JSON.parse & JSON.Stringfy

// emp3 = {
//   name: "arun",
//   company: "Gen&art",
//   skills: {
//     one: "axios",
//     two: "JS",
//   },
// };
// const emp4 = JSON.parse(JSON.stringify(emp3));
// emp4.name = "suresh";
// emp4.skills.one = "react";
// console.log(emp3);
// console.log(emp4);

//It will untill function are npot exist inside the object if any function exist we need to use third pary library
