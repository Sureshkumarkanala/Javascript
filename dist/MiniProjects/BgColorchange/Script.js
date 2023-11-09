const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

console.log(buttons);
console.log(body);

buttons.forEach((list) => {
  list.addEventListener("click", colorChange);

  function colorChange(e) {
    console.log(e);
    console.log(e.target.id);
    switch (e.target.id) {
      case "Red":
        body.style.backgroundColor = "red";
        break;
      case "Blue":
        body.style.backgroundColor = "Blue";
        break;

      case "Green":
        body.style.backgroundColor = "Green";
        break;
      case "Grey":
        body.style.backgroundColor = "Grey";
        break;
      default:
        body.style.backgroundColor = "pink";
    }
  }
});

// buttons.forEach((button) => {
//   button.addEventListener("click", function (e) {
//     console.log(e);
//     console.log(e.target.id);

//     if (e.target.id == "Green") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id == "Red") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id == "Grey") {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id == "Blue") {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });
