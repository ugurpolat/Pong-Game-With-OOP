class Stick2 extends Stick {
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
    this.ballMovementStick2();
  }

  keyDown() {
    document.addEventListener(
      "keydown",
      function (e) {
        let key = e.key;

        if (key === "W" || key === "w") {
          this.speed = -this.stickSpeedIncrease;
        } else if (key === "S" || key === "s") {
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

        if (key === "W" || key === "w") {
          this.speed = 0;
        } else if (key === "S" || key === "s") {
          this.speed = 0;
        }
      }.bind(this)
    );
  }
  stickBoundaries() {
    if (this.top <= 0) {
      this.top = 10;
    }

    if (this.top + this.height >= 600) {
      this.top = 520;
    }
  }

  loopStick2() {
    this.stickBoundaries();
    const stick2 = document.getElementById(this.stickID);

    this.top += this.speed;
    stick2.style.top = this.top + "px";
  }

  ballMovementStick2() {
    window.setInterval(this.loopStick2.bind(this), 100 / 60);
  }
}
