class Stick extends Shape {
  constructor(
    stickID,
    width,
    height,
    color,
    top,
    left,
    speed,
    stickSpeedIncrease
  ) {
    super(width, height, color);
    this.stickID = stickID;
    this.left = left;
    this.top = top;
    this.speed = speed;
    this.stickSpeedIncrease = stickSpeedIncrease;

    this.createShape();
    this.keyDown();
    this.keyUp();
    this.ballMovementStick();
  }

  createShape() {
    const gameField = document.getElementById("field");
    const stick = document.createElement("div");

    stick.id = this.stickID;
    stick.style.width = `${this.width}px`;
    stick.style.height = `${this.height}px`;
    stick.style.top = `${this.top}px`;
    stick.style.left = `${this.left}px`;
    stick.style.backgroundColor = `${this.color}`;
    stick.style.position = "absolute";

    gameField.appendChild(stick);
  }

  keyDown() {
    document.addEventListener(
      "keydown",
      function (e) {
        let key = e.key;
        if (this.stickID === "stick2") {
          if (key === "ArrowUp") {
            this.speed = -this.stickSpeedIncrease;
          } else if (key === "ArrowDown") {
            this.speed = this.stickSpeedIncrease;
          } //else if (key === " ") {
          //   this.createHTMLBall();
          // }
        } else if (this.stickID === "stick1") {
          if (key === "W" || key === "w") {
            this.speed = -this.stickSpeedIncrease;
          } else if (key === "S" || key === "s") {
            this.speed = this.stickSpeedIncrease;
          }
        }
      }.bind(this)
    );
  }

  keyUp() {
    document.addEventListener(
      "keyup",
      function (e) {
        let key = e.key;
        if (this.stickID === "stick2") {
          if (key === "ArrowUp") {
            this.speed = 0;
          } else if (key === "ArrowDown") {
            this.speed = 0;
          }
        } else if (this.stickID === "stick1") {
          if (key === "W" || key === "w") {
            this.speed = 0;
          } else if (key === "S" || key === "s") {
            this.speed = 0;
          }
        }
      }.bind(this)
    );
  }
  stickBoundaries() {
    if (this.top <= 0) {
      this.top = 0;
    }

    if (this.top + this.height >= 600) {
      this.top = 520;
    }
  }

  loopStick() {
    this.stickBoundaries();
    const stick1 = document.getElementById(this.stickID);
    const stick2 = document.getElementById(this.stickID);
    this.top += this.speed;

    stick1.style.top = this.top + "px";
    stick2.style.top = this.top + "px";
  }

  ballMovementStick() {
    window.setInterval(this.loopStick.bind(this), 100 / 60);
  }
}
