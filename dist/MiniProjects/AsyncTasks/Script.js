const text = document.getElementById("text");
// console.log(text);
const changeMe = function () {
  text.innerHTML = "text changed by using function";
};
const stopTimeout = setTimeout(changeMe, 5000);

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(stopTimeout);
  console.log("Stopped");
});

// const clicked = document.querySelector("#stop");
// clicked.addEventListener("click", () => {
//   clearInterval(stopTimeout);
//   console.log("Stopped");
// });
