//slice to get the some part of array-index based it will work in both arguments
//No impact on array
//create a new array

// diif b/w slice,splice:

// slice- not include the position of the 2 nd argument
//      - No impcat and not craete new arr
//      -negative values won't work

// splice-include the position of the 2 nd argument
//       -create the new array and delete the value from orginal array and create new array
//       -negative values won't work

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

//**********************slice****************************************/

//is used to get the some part of the string.
//create the new string no impact on the original array
//[0]'A',[1] 'r',[2] 'u',[3] 'n',[4] 'k',[5] 'u', [6]'m',[7] 'a',[8] 'r']
// console.log(str.split(""));
// console.log(str.slice(1, 3)); //ru
// console.log(str.slice(2, 8)); //unkuma
// console.log(str.slice(5, 7)); //um
// console.log(str.slice(5)); //umar(up to end)
// console.log(str.slice(-1)); //r
// console.log(str.slice(-5)); //kumar
// console.log(str.slice(-5, -2)); //kum
// console.log(str.slice(-5, -7)); //No output
