function randomcolor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervalId;
const startChangingcolor = function () {
  console.log("color change");
  intervalId = setInterval(changebgcolor, 1000);
  function changebgcolor() {
    document.body.style.backgroundColor = randomcolor();
  }
};

const stopChangingcolor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingcolor);
document.querySelector("#stop").addEventListener("click", stopChangingcolor);
