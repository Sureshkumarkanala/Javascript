const timenow = document.getElementById("date");
const timedisplay = function () {
  let date = new Date();
  let TodayDate = date.toLocaleTimeString();
  timenow.innerHTML = TodayDate;
};
let Intervalid;
function timerfunc() {
  // Interval = setInterval(timedisplay, 1000);

  if (!Intervalid) {
    Intervalid = setInterval(timedisplay, 1000);
  }
  console.log("Time started");
}
function timerstop() {
  console.log("Timer stopped");
  clearInterval(Intervalid);
  Intervalid = null;
}
const start = document
  .querySelector("#start")
  .addEventListener("click", (e) => {
    timerfunc();
  });
const timestop = document
  .querySelector("#stop")
  .addEventListener("click", () => {
    console.log("Timer stoped");
    timerstop();
  });
