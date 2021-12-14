class Net extends Shape {
  constructor(stickID, width, height, color) {
    super(width, height, color);
    this.stickID = stickID;

    this.createShape();
  }

  createShape() {
    const field = document.getElementById("field");
    const net = document.createElement("div");

    net.id = this.stickID;

    field.appendChild(net);
  }
}
