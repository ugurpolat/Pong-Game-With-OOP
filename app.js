let ball_id = 0;
let balls = [];

function startGame() {
  const gameField = new Field(900, 600, "black");
  const net = new Net("net");
  const stick1 = new Stick("stick1", 10, 80, "white", 240, 20, 0, 5);
  const stick2 = new Stick("stick2", 10, 80, "white", 240, 880, 0, 5);
  const ball = new Ball("ball" + ball_id, 10, 10, "white", 300, 450, 10, true);
  balls.push(ball);
}

function keyDown() {
  document.addEventListener("keydown", function (e) {
    let key = e.key;
    if (key === " ") {
    }
  });
}

function loop() {
  window.setInterval(function show() {
    if (balls.length > 0) {
      if (balls[0].isBallActive === false) {
        delete balls[0];
        balls.length--;
      }
    }
  }, 1000 / 60);
}

function setEvents() {
  startGame();
  loop();
}

setEvents();
