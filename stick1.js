class Stick1 extends Stick {
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
    super(stickID, width, height, color, top, left, speed, stickSpeedIncrease);

    this.keyDown();
    this.keyUp();
    this.ballMovementStick1();
  }

  keyDown() {
    document.addEventListener(
      "keydown",
      function (e) {
        let key = e.key;

        if (key === "ArrowUp") {
          this.speed = -this.stickSpeedIncrease;
        } else if (key === "ArrowDown") {
          this.speed = this.stickSpeedIncrease;
        } else if (key === " ") {
          // createBallObject();
        }
      }.bind(this)
    );
  }
  keyUp() {
    document.addEventListener(
      "keyup",
      function (e) {
        let key = e.key;

        if (key === "ArrowUp") {
          this.speed = 0;
        } else if (key === "ArrowDown") {
          this.speed = 0;
        }
      }.bind(this)
    );
  }

  stickBoundaries() {
    if (this.top <= 0) {
      this.top = 20;
    }

    if (this.top + this.height >= 600) {
      this.top = 520;
    }
  }

  loopStick1() {
    this.stickBoundaries();
    const stick1 = document.getElementById(this.stickID);

    this.top += this.speed;
    stick1.style.top = this.top + "px";
  }

  ballMovementStick1() {
    window.setInterval(this.loopStick1.bind(this), 100 / 60);
  }
}
