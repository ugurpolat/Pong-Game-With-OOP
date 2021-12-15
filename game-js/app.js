const gameField = new Field(900, 600, "black");

let ball_id = 0;
let balls = [];
let player1 = 0;
let player2 = 0;
let winNumber = 5;
let gameOver = false;

function startGame() {
  const scoreBoard = new ScoreBoard(75, 75, "#808080");
  const net = new Net("net");
  const stick1 = new Stick("stick1", 10, 80, "white", 240, 20, 0, 5);
  const stick2 = new Stick("stick2", 10, 80, "white", 240, 880, 0, 5);
  createBall();
  createPlayersName();
  const score1 = document.getElementById("score1");
  const score2 = document.getElementById("score2");
}

function keyDown() {
  document.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key === " ") {
      if (player1 != 5 && player2 != 5) {
        const ball = new Ball("ball" + ball_id, 10, 10, "white", 300, 450, 10, true);

        ball_id++;
        balls.push(ball);
      }
    }
  });
}

function loop() {
  window.setInterval(function show() {
    
    if (!gameOver) {
      if (balls.length > 0 && !gameOver) {
        balls.forEach((ball) => {
          if (ball.isBallActive === false) {
            if (ball.left > gameField.width) {              
               player1++;
               score1.innerHTML = `${player1}`;
               
               delete ball;
               balls.length--;
               
               if (player1 === winNumber) {
                  gameOver = true;
               } 
            } else if (ball.left < 0) {             
               player2++;
               score2.innerHTML = `${player2}`;

               delete ball;
               balls.length--;
               
               if (player2 === winNumber) {
               gameOver = true;
              } 
            }
          }
        });
      } else if(balls.length <= 0 && !gameOver) {
        createBall();
      }
    }
  }, 1000 / 60);
}

function createBall() {
  const ball = new Ball("ball" + ball_id, 10, 10, "white", 300, 450, 10, true);

  ball_id++;
  balls.push(ball);
}

function setEvents() {
  startGame();
  keyDown();
  loop();
}

function createPlayersName() {
  const field = document.getElementById("field");
  const playerName1 = document.createElement("div");
  const playerName2 = document.createElement("div");

  playerName1.id = "playerName1";
  playerName1.innerHTML = `${localStorage.getItem("player1")}`;
  playerName1.style.fontSize = "30px";
  playerName1.style.color = `#808080`;
  playerName1.style.position = "absolute";
  playerName1.style.left = "23%";
  playerName1.style.marginTop = "2%";

  playerName2.id = "playerName2";
  playerName2.innerHTML = `${localStorage.getItem("player2")}`;
  playerName2.style.fontSize = `30px`;
  playerName2.style.color = `#808080`;
  playerName2.style.position = "absolute";
  playerName2.style.right = "23%";
  playerName2.style.marginTop = "2%";

  field.appendChild(playerName1);
  field.appendChild(playerName2);
}

setEvents();
