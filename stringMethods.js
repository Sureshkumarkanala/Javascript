// create a string object
// let s = new String("Arun kumar");
// console.log(s.length);
//primitve datatype
// var str = "yamuna";
// console.log(str);
//convert from string to object
// var m = new String(str);
// console.log(m);
// for (let i = 0; i < m.length; i++) {
//   console.log(m[i]);
// }
//convert from string to array
// const n = str.split("");
// console.log("split", n[0]);

//charAt();
// indexOf();
// lastIndexOf();
// toLoweCase();
// toUpperCase();
// concat();
// trim();
// split();
// startWith();
// endsWith();
// slice();
// substr();
// includes();
// charCodeAt();
// repeat();
// replace();

// ****************************charAt*******************
// it will  print  the character at index which your given
//if at that index chat not exist it won't give any value

str = "Arunkumar";
// console.log(str.charAt(3));
// console.log("charAt", str.charAt(10));

//***********************IndexOf*****************************/
//is used to get the indexof the particular char or string
//it's a case scensitive if char/string not exist we will get -1

// console.log(str.indexOf("s")); //-1
// console.log(str.indexOf("kumar")); //4-k starts at position 4(we will get index only total string exist)
// console.log(str.indexOf("A")); //0

// *****************LastIndexOf***********************************

// console.log(str.lastIndexOf("r")); //given last index

//********************************toUpperCase********************/
// it will change the all the letters in to uppercase temp
// we have to store in another variable
// var upper = str.toUpperCase(str);
// console.log(upper);
// console.log(str);

//********************************toLowerCase********************/
// it will change the all the letters in to lowercase temp
// we have to store in another variable
// var lower = str.toLowerCase(str);
// console.log(lower);
// *********************cancat*************************************
// to add the two strigns make it as one
//it won't change the old strings

// str1 = "yamuna";
// str2 = "buddy";
// var add = str.concat(str1, str2);
// console.log(add);
// console.log(add);

// ***************************trim*************************************
// it will remove the space in the given string at first at last
// str4 = "    A R U N   ";
// str3 = str4.trim();
// console.log(str3);

//**************************split****************************************/
// split(saperator, limit);both optional
// it divides the string in to an array  of substrings based on separator
// str5 = str.split();
// console.log(str5); //string coverted as array of array-['Arunkumar']
// // console.log(str5[0]); //converted as a normal string-Arunkumar
// // console.log(str5[0][2]); //-u
// var arr = ["a", "b", "c", "d"];
// var str6 = str.split("");
// //["A", "r", "u", "n", "k", "u", "m", "a", "r"];
// console.log(str);

// console.log(str.toLowerCase(str).split("")); // ['a', 'r', 'u', 'n', 'k', 'u', 'm', 'a', 'r']
// console.log(str.toLowerCase(str).split("r")); //['a', 'unkuma', '']
// console.log(str.toLowerCase(str).split("a")); //['','runkum','r'];
// console.log(str.toLowerCase(str).split("u")); //['ar','nk','mar'];
// var st = "RRR KG Pushpa KGF2";
// console.log(st.split()); //make array
// console.log(st.split("")); //add every letter as ind element
// console.log(st.split(" ", 1)); //get 1 space
// console.log(st.split(" ", 2)); //up to 2 space
// seperator not present in the array then take it as()

//**********************startsWith****************************************/
//it written true /false if given string starts with given element return true.
// console.log(str.sWith("A")); //true
// console.log(str.startsWith("a")); //false
// console.log(str.toLowerCase().startsWith("a")); //true
// console.log(str.startsWith("x")); //false

//**********************endsWith****************************************/
//it written true /false if given string ends with given element return true.

// console.log(str.endsWith("A")); //false
// console.log(str.endsWith("r")); //true
// console.log(str.toUpperCase().endsWith("R")); //true
//**********************splice****************************************/

//is used to get the some part of the string.
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

//**********************substring****************************************/
// str = "Arun kumar";

// // it will display the value inside the string
// // work same as slice but -ve indexes are not valid in substr
// console.log(str);
// console.log(str.substring(3, 7)); //n ku
// console.log(str.substring(3)); // n kumar

//**********************substr****************************************/
// str = "Arun kumar";
// // give 2 arguments 1. from which index 2. how many characters
// console.log(str.substr(3, 4)); //n ku
// console.log(str.substr(2, 6)); //un kum

//**********************includes****************************************/
//it  will return true(string exists)/false
// we can send from which index we need to check
// console.log(str.includes("z")); //false
// console.log(str.includes("kum")); //true
// console.log(str.includes("un")); //true
// console.log(str.includes("un", 5)); //false-here searched from index 5

//**********************charCodeAt****************************************/
//it will give ascii code for all the elements in keyboard
// we need to give the index of the character
//default give decimal

// console.log(str.charCodeAt(3)); //110
// console.log(str.charAt(6)); //u
// console.log(str.charCodeAt(6)); //117

//**********************Repeat****************************************/

//we can print the given string in 'n' times based on the requirement

// console.log(str.repeat(4)); //Arun kumarArun kumarArun kumarArun kumar

//**********************Repeat****************************************/
// is used to replace the substring inside the actual string
//replace only 1 time at initial occurence
//By using the  Regular expression we can change at every where

// console.log(str.replace("Arun", "Suresh").replace("kumar", "yamuna")); //Suresh yamuna

// spl = "ArunAnu Anand";
// // console.log(spl);
// console.log(spl.replace("A", "K")); //KrunAnu Anand
// console.log(spl.replace(/A/g, "K")); //KrunKnu Knand
// console.log(str);
