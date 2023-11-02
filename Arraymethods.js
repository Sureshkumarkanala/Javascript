// Filter-perform on hole array based on the given condition and return the new array

// find-once given condition satisfied stop the exection and return first result

// some-it return true/false based on the given condition(once condtion satisfied written true and stop execution)

// reduce-perform the operation on the array based on the operation and return one value as a result
// (we need to perform loop /rotation in array we use reduce provide the initial value, accumulator)

// every-if all the elemnts in the array satisfies condition return true, if one element fail the condition also return flase

//forEach modify the original array but doesn't retrun any thing

// // map modify the original array and return the new array.

const grocerylist = [
  { name: "Apple", price: 50, category: "fruits" },
  { name: "orange", price: 60, category: "fruits" },
  { name: "tamoto", price: 30, category: "veg" },
  { name: "Carrot", price: 20, category: "veg" },
];

console.log(grocerylist); //push the element in to array

// grocerylist.push({ name: "milk", price: 25, category: "dairy" });
// console.log(grocerylist);

//push the element using the function
// function addelement(name, price, category) {
//   this.name = name;
//   this.price = price;
//   this.category = category;
// }
// grocerylist.push(new addelement("curd", 35, "dairy"));
// console.log(grocerylist[5].name);

// console.log(grocerylist);
// ****************forEach******************************************
//don't create new array
//ForEach methos used to iterate the array by each value it won't return any value and changes are saved
//  in the original array
// const prices = [];
// const list1 = grocerylist.forEach((item) => {
//   prices.push(item.price);
// });
// console.log(prices);

// ****************map******************************************
//map-it will return new array
//impact on old array
//if we check and condition we will get the true/false in array.

// const newprice = grocerylist.map((item) => {
//   return { name: item.name, price: item.price * 2 };
// });
// console.log("crete the new array using map",newprice);

//by using the map change the object key names and create the new array
//here braces will defer pls check once
//with 'return'
// const newvalue = grocerylist.map((item) => {
//   return { name1: item.name, value: item.price };
// });
// console.log(newvalue);
//without 'return'
// const newvalue = grocerylist.map((item) => ({
//   name1: item.name,
//   value: item.price,
// }));
// console.log(" change the key names and create thr new array with map ",newvalue);
//return the new array
//apply map in object

// const obj = {length: 3, age: 10, class: 3 };
// // console.log(obj);
// // const objarr = obj.map((key, value) => {
// //   return value * 19;
// // });
// console.log(Array.prototype.map.call(obj, (x) => x ** 2));

// const arrayLike = {
//   length: 3,
//   0: 10,
//   1: 20,
//   2: 30,
// };
// console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));

// ****************filter******************************************

// New Array
// //filter is used to filter the data from array(get particular )
// // const fruitlist = grocerylist.filter((data) => data.category === "fruits");

// const fruitlist = grocerylist.filter((data) => data.category === "fruits");
// console.log("filter fruitlist ", fruitlist);

// const veglist = grocerylist.filter((item) => item.category === "veg");
// console.log("filter veglist ", veglist);

// ****************find******************************************

//Is going to find the array and return it.
//Find will stop the search when found the first match
//we can find the index also by using find index
// console.log(grocerylist);

// const result = grocerylist.find(
//   (item) => item.category.toLocaleLowerCase() === "veg"
// );
// console.log(result);
// const resultindex = grocerylist.findIndex(
//   (item) => item.name.toLocaleLowerCase() === "curd"
// );
// console.log(resultindex);

// ****************Sort******************************************

//sort method is used to compare the values in the array
//when compare string we need to use localcompare
//when compare number we need to use '-' operator
//won't return new array and no impact on original array

// sort will work based on String(means given numbers are converted in to thestring )

// const asscending = grocerylist.sort((x, y) => {
//   return x.price - y.price;
// });
// console.log(asscending);

// const asscend = grocerylist.sort((x, y) => {
//   return x.category.localeCompare(y.category);
// });
// console.log(asscending);
// console.log(asscending.reverse());
// const reverse = asscending.reverse();
// console.log(reverse);

// ****************Some*****************************************

//it return the boolean value based on given criteria
//act as 'or'

// const checkvalue = grocerylist.some((item) => item.price < 10);
// console.log(checkvalue); //false

// const checkprice = grocerylist.some((item) => item.price < 50);
// console.log(checkprice); //true

// ****************Every*****************************************
//every check the all the item match the criteria return 'true'
//act as 'and'

// const checkvalue1 = grocerylist.every((item) => item.price < 10);
// console.log(checkvalue1); //false

// const checkprice1 = grocerylist.every((item) => item.price < 50);
// console.log(checkprice1); //false

// const checkprice2 = grocerylist.every((item) => item.price < 100);
// console.log(checkprice2); //true

// ****************Reduce*****************************************
//Reduce is used to perform the  add or sub(any operation) on original array
//and giive the singal value
//start with initial value

// const grocerylist = [
//   { name: "Apple", price: 50, category: "fruits" },
//   { name: "orange", price: 60, category: "fruits" },
//   // { name: "tamoto", price: 30, category: "veg" },
//   // { name: "Carrot", price: 20, category: "veg" },
// ];

// const totalval = grocerylist.reduce((currenttotal, item, index) => {
//   return item.price + currenttotal;
// }, 0);
// console.log(totalval); //220
// let intiail = 100;
// const totalval1 = grocerylist.reduce((currenttotal, item, index) => {
//   return item.price + currenttotal;
// }, intiail);
// console.log(totalval1); //320

// var k = [1, 2, 3, 12, 23, 33, 3, 313];

// var max = k.reduce(function (a, num) {
//   if (a > num) {
//     return a;
//   } else {
//     return num;
//   }
// }, k[0]);
// console.log(max);

// ****************Includes*****************************************
//includes is used to find the elemement is present or not in the array
//return true/false or new array

// const num = [1, 2, 3, 4, 5, 7, 7];
// console.log(num.includes(1)); //true

// const exist = grocerylist.find((item) => {
//   return item.name.includes("milk");
// });
// const ind = exist;
// console.log(ind.name);
// console.log(exist.price);

// ****************concat*****************************************

//concat is used to add

// const str = ["arun"];
// const str1 = ["yamuna"];
// const added = str.concat(str1);
// console.log(added);

// const num1 = [1, 2, 4, 5, 7, 8];
// const num2 = [3, 6, 8, 5];
// const add = num1.concat(num2);
// console.log(add);
// console.log(add.sort());

// let x=arr1.concat(arr2);
// console.log("concat",x);

// arr1.push(arr2);
// /* console.log(arr1); */
// console.log(arr1[6]);//[7,8,9,55]
// console.log(arr1[6][2]);//9

// ****************flat*****************************************

//used to add the nested array values in recursively and display in one array
//flst default level is one

// const arr = [1, 2, 3, [4, 5], 6, 7, [8, 9]];

// console.log(arr.flat());

// const arr1 = [1, 2, 3, [4, 5, [8, 9, [10, 11]]]];
// console.log(arr1.flat());
// console.log(arr1.flat(2));
// console.log(arr1.flat(3));

// let y=[12,12,3,3,[3,5,6],[456,8],546];

// let z=y.flat(Infinity);
// console.log(z);//[12,12,3,3,3,5,6,456,8,546]

// ****************flatMap*****************************************
//flatmap is use full only at flat() with one value in inside array
//we done array method chaining

// const arr = [1, 2, 3, 6, 7, [8, 9, [10, [11]]]];
// console.log(arr.flat(2));

// console.log(arr.flat(3).map((item) => item * 100));
//[100, 200, 300, 600, 700, 800, 900, 1000]
// const num = [1, 2, 3, 6, 7, [8]];

// console.log(
//   num.flatMap((item) => {
//     return item * 100;
//   })
// );
// //[100, 200, 300, 600, 700, 800]

// const num1 = [1, 2, 3, 6, 7, [8, 9]];

// console.log(
//   num1.flatMap((item) => {
//     return item * 100;
//   })
// ); //[100, 200, 300, 600, 700, NaN]

//***********************join************************* */
// arr = [10, 20, 303, 4045554, 43, 5, 553, 3];
// console.log(arr);
// console.log(arr.join()); //remove the array structure-10,20,303,4045554,43,5,553,3
// console.log(arr.join(", "));

//*******************************Join************************************/

// join: is used to convert the array in to string

//it concatenate all elements of an  array & returns new string separated by separator
//array.join("which one need add in between element in array")
// var st = ["RRR", "KGF", "Pushpa", "KGF2"];
// console.log(st.join()); //RRR,KGF,Pushpa,KGF2

// console.log(st.join("-")); //RRR-KGF-Pushpa-KGF2
// console.log(st.join(2)); //RRR2KGF2Pushpa2KGF2
// console.log(st.join("*")); //RRR*KGF*Pushpa*KGF2

//******************************for In & for of**********************************/

// const names = ["Hi", "bye", "good", "bad"];
// console.log(arr);

//for of gives the values of the array
// for (const n of names) {
//   console.log("for of", n);
//   console.log("for of", names[0]);
// }

// // for In gives the indexs of the array
// for (const n in names) {
//   console.log("for In ", n);
//   console.log("for In ", names[0]);
// }

// for (const n of arr) {
//   console.log(n);
//   console.log(val);
// }

// ************************************************************************

//To execute the JS in Visual Studio is "node  Jsfilename  in Terminal"

//node arraymethods.js

// const array1 = [
//   { name: "mango", price: "10", category: "fruit" },
//   { name: "Grape", price: "20", category: "fruit" },
//   { name: "Banana", price: "30", category: "fruit" },
//   { name: "Tamato", price: "40", category: "vegitable" },
//   { name: "milk", price: "25", category: "others" },
//   { name: "Curd", price: "30", category: "other" },
// ];
// console.log("array1.length", array1[1].price);

// //forEach
// array1.forEach((item) => {
//   console.log(`The price of ${item.name} is ${item.price}`);
// });

// //map method-return the data and pushed in to a  new array.

// const newdata = array1.map((item) => {
//   return item.price * 10;
// });
// console.log("new array is ", newdata);
// console.log("old array is ", array1);

// //Filter

// const fruitlist = array1.filter((item) => {
//   return item.category === "others";
// });
// console.log("fruitlist is ", fruitlist);

// //Find

// const result = array1.find((item) => {
//   return item.category.toLocaleLowerCase() === "vegitable";
// });
// console.log("Find result is ", result);

// //FindIndex

// const resultIndex = array1.findIndex((item) => {
//   return item.category.toLocaleLowerCase() === "vegitable";
// });

// console.log("resultIndex is", resultIndex);

//Duplicate values removed from array

// var arr = ["a", "a", "b", "c", "d"];
// var remove = arr.filter((val, index) => arr.indexOf(val) == index);
// console.log("Duplicate values removed from array using filter", remove);

// var array = ["a", "a", "b", "c", "d"];
// var single = arr.filter((val, index) => arr.indexOf(val) == index);
// console.log("Duplicate values removed from array using filter", single);

// var a = [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, "aaa", "aaaa", "aaa"];
// let rdvv = new Set(a);
// console.log("Duplicate values removed from array using Set", rdvv);

// //Remove duplicate from array by using Set
// var a = [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, "aaa", "aaaa", "aaa"];
// let rdv = new Set(a);
// console.log("Duplicate values removed from array using Set", rdv);

// //Remove duplicate from array by using for
// var sample = ["b", "a", "a"];

// length = sample.length;
// var b = [];

// for (var i = 0; i < length; i++) {
//   if (!b.includes(sample[i])) {
//     b.push(sample[i]);
//   }
//   console.log("Remove duplicate from array by using for loop", b);
// }

// //Remove duplicate from array by using filter
// var arrr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplicates(arr) {
//   return arrr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(
//   "Duplicate values removed from Array using Set",
//   removeDuplicates(arrr)
// );

// //Remove duplicate values from string
// let st = "aafffcc";
// let unique = [...new Set(st.split(""))].join("");
// console.log("Duplicate values removed from String using Set", unique);

// let str = "qqqqadfdgfff";
// let unq = [...new Set(str.split(""))].join("");
// console.log("Duplicate values removed from String using Set", unq);

// const object = {
//   who: "World",
//   greet() {
//     return `Hello, ${this.who}!`;
//   },
//   farewell: () => {
//     return `Goodbye, ${this.who}!`;
//     console.log(object.greet());
//     console.log(object.farewell());
//   },
// };

// let arr1=[1,2,3,4,56,7];
// let arr2=[7,8,9,55];

// console.log(Array.isArray(arr1));//true

//Array.from --> Method is used to normal data in to Array

// console.log(Array.from(arr2));

// console.log(Array.isArray("Arun"));//false
// console.log(Array.from("Arun"));//["A","r","u","n"]

// console.log(Array.from({name:"Arun"}));//[]
// //To create the array from strings
//  let a=10;
//  let b=20;
//  let c=30;
//  console.log(Array.of(a,b,c));
