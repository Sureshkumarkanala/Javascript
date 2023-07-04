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

// let arr2 = [12, 55, 44, 35, 90, 13, 55, 1];

// function uniquearr(arr2) {
//   let unique = [];

//   for (ele of arr2) {
//     if (unique.indexOf(ele) == -1) {
//       unique.push(ele);
//     }
//   }
//   return unique;
// }
// // console.log(arr2);
// // console.log(uniquearr(arr2));

// let unique2 = new Set(arr2);
// console.log(unique2); // we get in object format
// let unique3 = [...new Set(arr2)]; //by using the destructure and spread operator we get in array format
// console.log(unique3);

// let x = unique3.sort().reverse();
// console.log(x);

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
