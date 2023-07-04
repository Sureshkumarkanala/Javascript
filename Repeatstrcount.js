const str = "hello  world";
let count = 0;
let countval = {};

for (i = 0; i < str.length; i++) {
  const ch = str[i];
  //   console.log(ch);
  //   console.log(countval[ch]); //undefined
  //   console.log(!countval[ch]); //have some value

  if (!countval[ch]) {
    countval[ch] = 0;
  }
  countval[ch]++;
}
console.log(countval);

// ********************************************************************
function countstr() {
  count = {};
  str
    .split("")
    .forEach((char) => (count[char] = count[char] ? count[char] + 1 : 1));

  return count;
}
console.log(countstr());






function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    };
  }
  let cls = outer();
  cls();
  cls();