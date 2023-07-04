add = ["suresh", "haresh", "ravi", "subbu", "mahesh", "pavan", "chiru"];
s = [
  { name: "hk", lname: "kumar" },
  { name: "sk", lname: "12345678" },
];

const veggies = ["potato", "ladyfinger", "onion", "Tamoto"];
console.log("Vegitables are ", veggies);

veggies.map((a) => {
  if (a == "potato") {
    console.log(a + "color is yellow");
  } else if (a == "ladyfinger") {
    console.log(a + "color is yellow");
  } else if (a == "onion") {
    console.log(a + "color is red");
  }

  // switch(a)
  // {
  //   case 'potato':
  //     console.log(a+"color is yellow");
  //   break;
  //   case 'onion':
  //     console.log(a+"color is red");
  //   break;
  //   case 'ladyfinger':
  //     console.log(a+"color is green");
  //   break;

  // }
});
