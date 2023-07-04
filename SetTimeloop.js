// for (var i = 0; i < 4; i++) {
//   console.log(i); //0 1 2 3
// }
// console.log(i); //4

// for (let j = 0; j < 4; j++) {
//   console.log(j); // 0 1 2 3
// }
// console.log(j); //Reference error: j is not defined

// ******************* setTimeout*****************
// for (var i = 0; i <= 10; i++) {
//   //   console.log(i); //0 1 2 3 4 5 6 7 8 9 10
//   setTimeout(() => {
//     console.log(i); //(if '=' present condition +1)
//     //11 for 11 times
//   }, 1);
// }
// console.log(i); //11

for (let m = 0; m < 10; m++) {
  //   console.log(m); //0 1 2 3 4 5 6 7 8 9
  setTimeout(() => {
    console.log(m); //0 1 2 3 4 5 6 7 8 9
  }, 1);
}
// console.log(m); //ReferenceError: m is not defined

//For 'var' it will point out the same location for every iteration and replace the value
//  For 'let' it will point out the different  location for every iteration and use value based on the
// iteration
