// To convert the data from one format to another format

// let n = "10";
// console.log(n); //10
// console.log(typeof n); //string

// let dataInnumber = Number(n);
// console.log(dataInnumber); //10
// console.log(typeof dataInnumber); //number

// let x = "10a";
// console.log(x); //10a
// console.log(typeof x); //string

// let dataInnum = Number(x);
// console.log(dataInnum); //NaN-- because '10a' is a pure number

// console.log(typeof dataInnum); //number

//"33"        ---> 33   number
//true        ---> 1    number

//""         ----> 0   number
//" "         ----> 0   number
//false       ---> 0    number
//null        ---> 0    number

//"33a"       ---> NaN  number
//undefined    --> NaN   number

// Boolean conversion

// let m = 1;
// valueinBoolean = Boolean(m);
// console.log(valueinBoolean); // true
// console.log(typeof valueinBoolean); // boolean

// m=1           true  boolean
// m='1'         true boolean
// m=" "         true boolen

// m=""          false boolean
// m=null        false boolean
// m=undefined   false boolean

// let p = "22";
// valueinstring = String(p);
// console.log(valueinstring); //22(consider as string)
// console.log(typeof valueinstring); // string

//"22"     ---> 22    string
//22       ---> 22    string
//""       ---> ""    string
//" "       ---> " "    string
//true      --->true   string
//null      ---> null    string
//undfined   --->undefined    string

//operations

// console.log(1 + 2); //3
// console.log("1" + 2); //12
// console.log(1 + 2 + 3); //6
// console.log("1" + 2 + 3); //123
// console.log(1 + "2" + 3); //123
// console.log(1 + 2 + "3"); //33

// console.log(+true);//1
// console.log(1+true);//2
// console.log(true+1);//2
// console.log(true+);//error

// console.log(1+"");//1
// console.log(""+1);//1
// console.log(1+null);//1
// console.log(null+1);//1
// console.log(undefined+true);//NaN
// console.log(true+undefined);//NaN

// let num1 = (num2 = num3 = 1 + 1);
// console.log(num1); //2
// console.log(num2); //2
// console.log(num3); //2

// difference between prefix and postfix
// let num = 10;
// ++num;
// console.log(num); //11

// let numb = 10;
// numb++;
// console.log(numb); //11

// let a = 10;
// let b = ++a;
// console.log(a, b); //11 11

// let c = 10;
// let d = a++;
// console.log(c, d); //10  11

// console.log(null == 0); //false
// console.log(null > 0); //false
// console.log(null < 0); //false
// console.log(null <= 0); //true
// console.log(null >= 0); //true

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //faslse
// console.log(undefined <= 0); //false
// console.log(undefined >= 0); //false

// console.log(2 == 2); //true
// console.log("2" === 2); //false because type different

// ==================================================================

// Memory types:

// 1. stack Memory(primitve data types) ::copy available
//  String,Number,Boolean,null,undefined,BigInt,Symbol

//  For every variable store the value in diff location.
//   so if we change one another wont be ImageBitmapRenderingContext

// let avalue = "Arun";
// let bvalue = avalue;
// console.log(avalue); //Arun
// console.log(bvalue); //Arun

// bvalue = "Dummi";
// console.log(avalue); //Arun
// console.log(bvalue); //Dummi

// 2. Heap memory(non primitive data types):: Reference address available:
//   Array,Object,Function

//if we change value in oneplace automatically change in another location also
//  reason it refer the location

// let obj1 = {
//   name: "Arun",
//   age: 30,
// };

// let obj2 = obj1;
// console.log("before obj1", obj1); //{name: "Arun",age:30}
// console.log("before obj2", obj2); //{name: "Arun",age:30}

// obj2.age = 40;

// console.log("After obj1", obj1); //{name: "Arun",age:40}
// console.log("after obj2", obj2); //{name: "Arun",age:40}

// To overcome the above use we use destructring ::::

let obj1 = {
  name: "Arun",
  age: 30,
};

let obj2 = { ...obj1 };
console.log("before obj1", obj1); //{name: "Arun",age:30}
console.log("before obj2", obj2); //{name: "Arun",age:30}

obj2.age = 40;

console.log("After obj1", obj1); //{name: "Arun",age:30}
console.log("after obj2", obj2); //{name: "Arun",age:40}
