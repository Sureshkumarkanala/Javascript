//DOM Elements
console.log(window.document.getElementById("contact"));
console.log("querySelector is", document.querySelector(".contact_list"));
console.log("getElementsByClassName", document.getElementsByClassName("item"));
console.log("querySelector  from list is", document.querySelector("ul"));
console.log("getElementsByTagName ", document.getElementsByTagName("li"));

console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

//Manipulate the DOM elements
//Using Query Selector change the singal value
//here query selecto we can use the direct class name /get the aceess from the herarche manner
const h3data = document.querySelector(".contact_list >h3");
console.log(h3data);
h3data.innerHTML = "List Data";

const db = document.querySelector(".db");
console.log(db);
db.innerHTML = "MongoDB";

const ul = document.querySelector(".contact_list >ul");
console.log(ul);
ul.firstElementChild.innerText = "React";
ul.children[1].innerHTML = "Vue JS";
ul.lastElementChild.innerText = "Jquery";

const Alllist = document.querySelectorAll(".item");
console.log(Alllist);

//Toggle
const btn = document.getElementById("toggle");
console.log(btn);

btn.addEventListener("click", (e) => {
  console.log(e);

  const ultoggle = document.querySelector(".contact_list > ul");
  if (ultoggle.style.display === "block") {
    ultoggle.style.display = "none";
  } else {
    ultoggle.style.display === "block";
  }
});

//Form  Validation
