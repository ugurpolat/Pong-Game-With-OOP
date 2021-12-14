class Ball extends Shape {
  constructor(ballID, width, height, color, top, left, speed, isBallActive) {
    super(width, height, color);

    this.ballID = ballID;
    this.top = top;
    this.left = left;
    this.speed = speed;
    this.ball_out_of_stick = false;
    this.isBallActive = isBallActive;

    let side;
    this.speedFactor = 0.4;
    if (Math.random() < 0.5) {
      side = 1;
    } else {
      side = -1;
    }

    let ballSpeed = Math.random() * 2 + 2;
    this.topSpeed =
      side * (Math.random() * 2 * Math.sqrt(3) - Math.sqrt(3)) * ballSpeed;
    this.leftSpeed = side * ballSpeed;

    this.startLife();
  }

  createHTMLBall() {
    const gameField = document.getElementById("field");
    const ball = document.createElement("div");

    ball.id = this.ballID;
    ball.style.width = `${this.width}px`;
    ball.style.height = `${this.height}px`;
    ball.style.top = `${this.top}px`;
    ball.style.left = `${this.left}px`;
    ball.style.backgroundColor = `${this.color}`;
    ball.style.position = "absolute";

    gameField.appendChild(ball);
  }

  removeHTMLElement() {
    const currentBall = document.getElementById(this.ballID);
    currentBall.remove();
  }

  loop() {
    if (this.isBallActive) {
      const currentBall = document.getElementById(this.ballID);

      this.top += this.topSpeed;
      this.left += this.leftSpeed;

      this.checkBoundaries();
      this.checkStickCollision();

      currentBall.style.left = this.left + "px";
      currentBall.style.top = this.top + "px";
    }
  }

  ballMovement() {
    window.setInterval(this.loop.bind(this), 1000 / 60);
  }

  checkBoundaries() {
    if (this.top <= 0 || this.top + this.height >= 600) {
      this.topSpeed = -this.topSpeed;
    }
  }

  checkStickCollision() {
    if (this.left <= parseInt(stick1.style.width) + 20) {
      if (this.ball_out_of_stick === false) {
        if (
          this.top + this.height > parseInt(stick1.style.top) &&
          this.top < parseInt(stick1.style.top) + parseInt(stick1.style.height)
        ) {
          this.leftSpeed = -this.leftSpeed + this.speedFactor;
        } else {
          this.ball_out_of_stick = true;
        }
      } else {
        if (this.left + this.width < 0) {
          // destroy this ball object
          if (this.isBallActive) {
            this.removeHTMLElement();
            this.isBallActive = false;
          }
        }
      }
    }

    if (
      this.left + this.width >=
      parseInt(field.style.width) - parseInt(stick2.style.width) - 10
    ) {
      if (this.ball_out_of_stick == false) {
        if (
          this.top + this.height > parseInt(stick2.style.top) &&
          this.top < parseInt(stick2.style.top) + parseInt(stick2.style.height)
        ) {
          this.leftSpeed = -this.leftSpeed + -this.speedFactor;
        } else {
          this.ball_out_of_stick = true;
        }
      } else {
        if (this.left > parseInt(field.style.width)) {
          // destroy this ball object
          if (this.isBallActive) {
            this.removeHTMLElement();
            this.isBallActive = false;
          }
        }
      }
    }
  }

  startLife() {
    this.createHTMLBall();
    this.ballMovement();
  }
}
