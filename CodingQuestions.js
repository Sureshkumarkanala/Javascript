// console.log("coding");
//Question 1:
// ----------

// Find the missing number in the Array

// let arr = [1, 2, 3, 5, 6];
// n = 6;

// function findmissing(arr, n) {
//   let sum = 0;

//   for (ele of arr) {
//     sum = sum + ele;
//   }
//   let actual = (n * (n + 1)) / 2;
//   return actual - sum;
// }
// console.log(findmissing(arr, n)); //4 is missing in array.

//Question 2:
// -------------
// Find the multiple missing numbers in sequence of array

// let arr1 = [2, 4, 5, 6];
// let n = 10;

// function allmissing() {
//   let obj = {};
//   let missing = [];
//   for (ele of arr1) {
//     obj[ele] = ele;
//   }

//   for (i = 1; i <= n; i++) {
//     if (obj[i] === undefined) {
//       missing.push(i);
//     }
//   }
//   return missing;
// }
// console.log(allmissing(arr1, n));

// Question 3:
// -----------

//Remove duplicate values in the array

arr = [1, 2, 3, 4, 5, 5, 6, 6, 8];

//1 way using set

const unique1 = [...new Set(arr)];
console.log("1 way using set", unique1);
//2 way using Arrayfrom
const unique2 = Array.from(new Set(arr));
console.log("2 way using Arrayfrom", unique2);

//3 way using filter
const unique3 = arr.filter((value, index) => arr.indexOf(value) !== index);
console.log("3 way using the filter", unique3);

//4 way using forEach
function unique4(arr) {
  console.log("inside function", arr);
  const unique = [];
  arr.forEach((value) => {
    if (!unique.includes(value)) {
      unique.push(value);
    }
  });
  return unique;
}
console.log("4 way by usinf forEach", unique4(arr));

//5 way using the reduce
function uniqueele(arr) {
  return arr.reduce((prev, current) => {
    if (!prev.includes(current)) {
      prev.push(current);
    }
    return prev;
  }, []);
}

console.log("5 way using reduce", uniqueele(arr));

// Question 4:
// -----------

//Sort Array by odd and even numbers

// arr3 = [1, 2, 3, 5, 6, 7, 8, 9, 4, 10, 12];

//normal of a array
// console.log(arr3.sort((x, y) => y - x));

//Sorting of an array individual even and odd
// nums = [1, 2, 3, 5, 6, 7, 8, 9, 4, 10, 12];

// let even = [];
// let odd = [];

// nums.map((a) => {
//   if (a % 2 == 0) {
//     even.push(a);
//   } else {
//     odd.push(a);
//   }
// });
// console.log(even);
// console.log(odd);

//
// Question 5:
// -----------

//Finding the longest string in the array

// arr4 = ["Arun", "yamuna", "suresh", "kumari", "kumar", "venkata kumari"];

// let longest = arr4[0];

// for (i = 1; i < arr4.length; i++) {
//   if (longest.length < arr4[i].length) {
//     longest = arr4[i];
//   }
// }
// console.log(longest);

//if we have multiple strings  have max length in array

arr5 = ["Arun", "yamuna", "suresh", "kumari", "venkta", "kumari"];

let maxlength = arr5[0].length;

for (i = 1; i < arr5.length; i++) {
  let cl = arr5[i].length;
  if (maxlength < cl) {
    maxlength = cl;
  }
}
let maxall = [];
for (ele of arr5) {
  if (ele.length == maxlength) {
    maxall.push(ele);
  }
}

console.log(maxall);

//Question 6:
// ------------

// Display the names in a array of object based on the Condition

const person = [
  { name: "Arun", age: 30 },
  { name: "Suresh", age: 30 },
  { name: "Dummy", age: 24 },
];
console.log(person);

const result = person.filter((list) => list.age < 25);
console.log("result is", result);
const names = result.map((list) => list.name);
console.log("name is", names);
