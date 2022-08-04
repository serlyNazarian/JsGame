let game = document.querySelector(".game");
let person = document.querySelector(".person");
let food = document.querySelector(".food");

let size = document.getElementById("size");

food.style.left = randomPosition().x + "px";
food.style.top = randomPosition().y + "px";

let gameWidth = game.offsetWidth;
let gameHeight = game.offsetHeight;
let personWidth = person.offsetWidth;
let personHeight = person.offsetHeight;

const onclick = () => {
  let personWidth = person.offsetWidth;
  let personHeight = person.offsetHeight;
  person.style.width = `${personWidth - 10}px`;
  person.style.height = `${personHeight - 10}px`;
  console.log("personWidth = ", personWidth);
  // size.innerHTML = Number(size.innerHTML) + 10;
  let PersonScoreTag = document.getElementById("PersonScore");
  PersonScore -= 10;
  console.log("person Score = ", PersonScoreTag);
  PersonScoreTag.innerHTML = PersonScore;
};

function randomPosition() {
  let x = Math.floor(Math.random() * 400);
  let y = Math.floor(Math.random() * 400);
  return { x, y };
}
console.log(randomPosition());

person.onclick = onclick;

let x = 0;
let y = 0;
let playerScore = 0;
let PersonScore = 100;

window.onkeydown = function (event) {
  let code = event.keyCode;
  //console.log(code) 68d, 65a,87w,83s
  if (code === 68 && x < gameWidth - personWidth) {
    x += 10;
    person.style.left = x + "px";
  } else if (code === 65 && x > 0) {
    x -= 10;
    person.style.left = x + "px";
  } else if (code === 87 && y > 0) {
    y -= 10;
    person.style.top = y + "px";
  } else if (code === 83 && y < gameHeight - personHeight) {
    y += 10;
    person.style.top = y + "px";
  }
  if (
    person.offsetLeft + person.offsetWidth > food.offsetLeft &&
    person.offsetTop + person.offsetHeight > food.offsetTop &&
    person.offsetTop + 20 < food.offsetTop &&
    person.offsetLeft + 20 < food.offsetLeft
  ) {
    food.style.left = randomPosition().x + "px";
    food.style.top = randomPosition().y + "px";
    person.style.width = person.offsetWidth + 10 + "px";
    person.style.height = person.offsetHeight + 10 + "px";
    let playerScoreTag = document.getElementById("playerScoreTag");
    playerScore += 10;
    // console.log("playScore= ", playerScore);
    // console.log("playerScoreTag=", playerScoreTag);
    playerScoreTag.innerHTML = playerScore;
  }
};

function countdown() {
  var seconds = 60;
  function tick() {
    var counter = document.getElementById("counter");
    seconds--;
    counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      document.getElementById("counter").innerHTML = "";
    }
  }
  tick();
}
countdown();
