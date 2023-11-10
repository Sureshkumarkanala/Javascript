let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrhigh = document.querySelector(".lowOrhigh");
const startover = document.querySelector(".resultparas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter valid number");
  } else if (guess < 1) {
    alert("Enter value more than 1");
  } else if (guess > 100) {
    alert("enter the number less than 100");
  } else {
    prevGuess.push(guess);

    if (numGuess === 10) {
      displayGuess(guess);
      displaymessage(`Game over Random number was  ${randomnumber}`);
      endgame();
    } else {
      displayGuess(guess);
      checkguess(guess);
    }
  }

  //
}

function checkguess(guess) {
  if (guess === randomnumber) {
    displaymessage(
      `entered the number match with random number ${randomnumber}`
    );
    endgame();
  } else if (randomnumber > guess) {
    displaymessage(`entered value is less than random number`);
  } else if (randomnumber < guess) {
    displaymessage(`entered value is greater  than random number`);
  }

  prevGuess.push(guess);
}
function displayGuess(guess) {
  userInput.value = "";
  guessslot.innerHTML += `${guess} ,`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displaymessage(message) {
  lowOrhigh.innerHTML = `<h4 style={{padding-left:20px}}>${message}</h4>`;
}

function endgame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML =
    "<h2 id='newGame' style='margin-left=20px ;color='red'>Start new Game</h2>";
  startover.appendChild(p);
  playGame = false;
  newgame();
}

function newgame() {
  console.log("game eneded");
  const newgamebutton = document.querySelector("#newGame");
  newgamebutton.addEventListener("click", function (e) {
    randomnumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessslot.innerHTML = "";
    remaining.innerHTML = "";
    userInput.removeAttribute("disabled");
    startover.removeChild(p);
    playGame = true;
  });
}
