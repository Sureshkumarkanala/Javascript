//Changing the array to object and vice versa

// //Array to object
// const empy = ["Arun", 30];
// const a = { empy };
// console.log(a.empy[0]);
// //object to Array
// const em = { name: "AAA", city: "bglr" };
// const ar = [em];
// console.log(ar[0].name);
// ************************************************************************

// const emp = {
//   name: "arun",
//   age: 30,
//   company: "HCL",
//   Desg: "SE",

//   Address: {
//     temp: { city: "Bglr", state: "KA" },
//     permanent: {
//       city: "nlr",
//       state: "Ap",
//     },
//   },
// };

// console.log(emp);
//When object destructure we have to use same name present in the original obj

// const { Address, company: job, name: fullname } = emp;
// const { Address: place } = emp; //we can only assign value (obj ) to other variable  individually
// not do with other variables { Address:place, company: job, name: fullname }

// console.log(job);
// console.log(fullname);
// console.log(Address.temp);
// console.log(place);

//Acess the values inside obj
//temp object
// i want to get city value only

// const {
//   Address: { temp },
// } = emp;
// console.log(temp);

// const {
//   Address: {
//     temp: { city },
//   },
// } = emp;
// console.log(city);

//We can  Destructure the default parametes

// const std = {
//   //   name:"",
//   age: 15,
// };
// const { name: fullname = "Suresh", age } = std;
// console.log(fullname); //name key:value pair not availble in the object it will print
// console.log(std.age); //15

// *****************************************************************************8
// Function Destructuring

const emp = {
  name: "arun",
  age: 30,
  company: "HCL",
  Desg: "SE",

  Address: {
    temp: { city: "Bglr", state: "KA" },
    permanent: {
      city: "nlr",
      state: "Ap",
    },
  },
};

// console.log(emp);

//below written syntax error here argument take full emp as argument
// function a(Address) {
//   //   console.log(age);//ReferenceError: age is not defined
//   console.log(Address); //
//   console.log(Address.temp); //undefined
// }
// a(emp);

// function a({ Address, age }) {
//   console.log(age); //30
//   console.log(Address); //{temp: {…}, permanent: {…}}
//   console.log(Address.temp); //{city: 'Bglr', state: 'KA'}
// }
// a(emp);

// ***********************************************************************

// Array Destructring

// const arr = ["Arun", "yamuna", "Suresh", "Alekya"];
// console.log(arr);

// const [name1, name2] = arr;
// console.log(name1); //Arun
// console.log(name2); //yamuna

// const [name3, , name4] = arr;
// console.log(name3); //Arun
// console.log(name4); //Suresh -because here we are skipped the value "a[1]-yamuna"

// //here we used the rest operator remainig all the values come as  an array
// const [name5, ...name6] = arr;
// console.log(name5); //Arun
// console.log(name6); //['yamuna', 'Suresh', 'Alekya']

// ********************object inside  Array Destructure*****************************************

// const grocery = [
//   { name: "Apple", price: 50, category: "fruits" },
//   { name: "orange", price: 60, category: "fruits" },
//   { name: "tamoto", price: 30, category: "veg" },
//   { name: "Carrot", price: 20, category: "veg" },
// ];
// console.log(grocery);

// // const [item1, ...rest] = grocery;//we we used diff because array
// // console.log(item1); //we get the first object in the array
// // console.log(rest); //remaining get in the  array format

// // const [{ name }] = grocery; //we have to use the same name obj
// // console.log(name);//Apples
// const [, , { name }, ...rest] = grocery; //we have to use the same name obj
// console.log(name); //tamoto
// console.log(rest); //last obj we will get

// ****************Array inside object***********************************

const obj = {
  fruits: ["Apple ", "orange"],
  veg: ["Carrot ", "Tamoto"],
  drink: ["milk", "curd"],
};

// console.log(obj);

// const {
//   drink: [drinks],
// } = obj;
// console.log(drinks); //milk

// const { fruit } = obj;
// console.log(fruit); //undefined we have the give the same obj key name

// const {
//   fruits: [app, or],
// } = obj;
// console.log(app, or); //Apple  orange
// const {
//   fruits: [, orr],
// } = obj;

// console.log(orr); //orrange we skip the first value

// *************************Nested Array to object **********************

const comp = [
  ["HCL", "Bglr"],
  ["wipro", "mysore"],
  ["IBM", "chennai"],
];

const cmpname = comp.map((com) => {
  return { name: com[0], location: com[1] };
});
console.log(cmpname);
// we get the 3 objects

// const cmpname = comp.map(([name, location]) => {
//   return { name: location };
// });
// console.log(cmpname);
//here directly we use destructure the object
