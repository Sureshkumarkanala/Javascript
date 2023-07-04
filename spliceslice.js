//slice to get the some part of array
//No impact on new array
//create a new array

arr = [1, 2, 3, 5, 6, 7, 9, 73, 4];

// var newslice = arr.slice(2, 5);
// console.log(newslice);
// console.log(arr);
// console.log(arr.slice(-5, -2));

// splice()-remove and add some elements at some locations
// Splice(index,no of elements,mention the add elements)
//gives new array
//impact of original array

var newarr = arr.splice(2, 2);
// console.log(newarr);
// console.log(arr);
// if we want to add the elements to array only
// var add = arr.splice(5, 1, 10, 20);
// console.log(add);
// console.log(arr);

//here we remove the element at position 5
//no of elements removed -1
//added elements are -10, 20
// [1, 2, 6, 7, 9, 10, 20, 4]

// console.log(arr);

// var remove = arr.splice(0, 2, 100);
// console.log(arr);
// console.log(remove);

// console.log(arr.splice(0, 1, 1000));
// console.log(arr);
// console.log(remove);

// console.log(arr);
// console.log(arr.splice(-4, 4, 0));
// console.log(arr);
//from -4 index removed 4 elements and added 0

// [1,2,6,7,9,73,4]
console.log(arr.splice(-3, 0, 100));
console.log(arr);
