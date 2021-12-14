class ScoreBoard extends Shape {
  constructor(width, height, color) {
    super(width, height, color);

    this.createScoreBoard();
  }

  createScoreBoard() {
    const field = document.getElementById("field");
    const score1 = document.createElement("div");
    const score2 = document.createElement("div");

    score1.id = "score1";
    score1.innerHTML = "0";
    score1.style.fontSize = `${this.width}px`;
    score1.style.color = `${this.color}`;
    score1.style.position = "absolute";
    score1.style.left = "25%";
    score1.style.marginTop = "5%";

    score2.id = "score2";
    score2.innerHTML = "0";
    score2.style.fontSize = `${this.width}px`;
    score2.style.color = `${this.color}`;
    score2.style.position = "absolute";
    score2.style.right = "25%";
    score2.style.marginTop = "5%";

    field.appendChild(score1);
    field.appendChild(score2);
  }
}
