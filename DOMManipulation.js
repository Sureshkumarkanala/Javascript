function change() {
  alert("click button  clicked by 1 way ");
  document.body.style.background = "yellow";
}
function cleared() {
  alert("clear clicked by 1 way");
  document.body.style.background = "red";
}
function changing() {
  alert("clicking clicked by 2 way");
  document.body.style.backgroundColor = "blue";
}
function textbg() {
  alert("clicked inside text field 2 way");
  document.body.style.backgroundColor = "orange";
}
let btn = document.getElementById("b2");
btn.onclick = changing;

let textcolor = document.getElementById("txt");
textcolor.onclick = textbg;

// let btn = document.getElementById("b1");
// //NO need to give '()'
// btn.onclick = change;
// let btnclr = document.getElementById("c1");
// //NO need to give ()
// btnclr.onclick = clear;
