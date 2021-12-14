class Field extends Shape {
  constructor(width, height, color) {
    super(width, height, color);

    this.createShape();
  }

  createShape() {
    const gameField = document.getElementById("gameField");
    const field = document.createElement("div");

    field.id = "field";
    field.style.width = `${this.width}px`;
    field.style.height = `${this.height}px`;
    field.style.backgroundColor = `${this.color}`;

    gameField.appendChild(field);
  }
}
