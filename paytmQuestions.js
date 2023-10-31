// 1. compare the two objecs with values

// For objects will store in the different location when we try to compare it will compare the address not value

(function () {
  var objA = {
    foo: "foo",
    bar: "bar",
  };

  var objB = {
    foo: "foo",
    bar: "bar",
  };
  console.log(objA == objB); // false
  console.log(objA === objB); // false
})();

//2. print new array

(function () {
  var greet = "Hello World";
  var toGreet = [].filter.call(greet, function (element, index) {
    return index > 5;
  });
  console.log(toGreet); //["W","o","r","l","d"]
})();

// 3. Create a newObj by using Object.create and del the value in new Object

let dummi = {
  price: 199,
  get_price: function () {
    return this.price;
  },
};
console.log("dummiobj", dummi.get_price()); //199

let realObj = Object.create(dummi);
realObj.price = 299;

console.log("realObj is", realObj); //{price: 299}

console.log("realObj price is", realObj.price); //299

delete realObj.price;
console.log("after del", realObj.get_price()); //199

//4. Create a new arry by using the new Array Keyword

(function () {
  var arr = new Array("100");
  console.log(arr); //["100"]
  console.log(arr.length); //1
})();
//*******************************************//
let x;
(function () {
  var arr1 = new Array(100);
  console.log(arr1); //["undefined/empty","undefined/empty",.......,"undefined/empty"]--create array with 100 values as undefined
  console.log(arr1.length);
  100;
})();
/////************************ */
let y;
(function () {
  var a = new Array(1);
  a.push("Hi");
  console.log(a); //[undefined/empty,"Hi"]
  console.log(a.length); //2
})();

//5. typeof related question wih self IIFE.

(function foo() {
  bar();
  function bar() {
    abc();
    console.log(typeof abc); //function
  }
  function abc() {
    console.log(typeof bar); //function
  }
})();

// 6. sort method- it will sort up to 1 to 9 same but it comes to 2 digit different

const arr = [
  1, 2, 3, 5, 6, 7, 77, 11, 112, 21, 12, 111, 123, 44, 22, 222, 134, 2344,
];
arr.sort();
console.log(arr); //[1, 11, 111, 112, 12, 123, 134, 2, 21, 22, 222, 2344, 3, 44, 5, 6, 7, 77]

//7. passing argument in IIFE

(function (a) {
  return (function (b) {
    console.log(a); //20
    console.log(b); //10
    a = 6;
  })(10);
})(20);

(function (c) {
  return (function () {
    console.log(c); //20

    c = 6;
  })();
})(20);

(function (d) {
  return (function () {
    console.log(d); //undefined
    d = 6;
  })(30);
})();

//8.setTimout function- '0' also consider as time.

(function () {
  setTimeout(() => console.log(1), 2000);

  console.log(2);
  setTimeout(() => console.log(3), 0);
  console.log(4);
})();

//2431

(function () {
  setTimeout(() => console.log(1), 0);

  console.log(2);
  setTimeout(() => console.log(3), 1);
  console.log(4);
})(); // 2413

//9.  adding 2 values by using + operator

var m = 12;
var n = 8;
var res = eval("m+n"); //20
console.log(res);

var p = 12;
var q = 8;
var res = eval(p + q); //20
console.log(res);

var c = 12;
var d = 8;
var res = eval("c" + "d"); //"cd"/unexpected error
console.log(res);

//10. switch case related query "" as also imp in result

var grade = "C";

// var grade="A";//"10" - string type

switch (grade) {
  case "A": {
    result = "10";
    break;
  }

  case "B": {
    result = "9";
    break;
  }

  case "C": {
    result = 8;
    break;
  }
  default:
    result = "0";
}

console.log(result); //8- Number type

//11. related to this inside the function-
//every time this consider the parent if not global value it will take

var length = 10;
function fun() {
  var length = 20;
  console.log("Ganerally", length); //20
  console.log("when use this", this.length); //10
  console.log("when use this", this.length); //10
}

fun();

function fn() {
  var len = 20;
  console.log(len); //20
  console.log(this.len); //undefined
  console.log(this.length); //0 -if value present in global also length is "0"
}
fn();

//12.operator related- we need check in the browser console

0 && 1; //0

0 || 1; //1

1 && 0; //0

1 || 0; //1

//13. Program

//Given a board with an integer 'n' written on it, select an integer 'x' from the board. For each, 'i' from 1 to 'x', if the remainder when 'x' is divided by 'i' is 1, add the integer (x-i) to the board. Find out the maximum number of distinct integers that can be present on the board.

//https://www.geeksforgeeks.org/count-of-distinct-remainders-when-n-is-divided-by-all-the-numbers-from-the-range-1-n/

function distinct(n) {
  if (n % 2 == 0) {
    return parseInt(n / 2);
  } else console.log("value is ", parseInt(n / 2)); //0
  return 1 + parseInt(n / 2);
}

let n = 5;
console.log(distinct(n)); //3
