const playerName_1 = document.getElementById("player-1");
const playerName_2 = document.getElementById("player-2");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  localStorage.setItem("player1", playerName_1.value);
  localStorage.setItem("player2", playerName_2.value);
  window.open("game.html", "_self");

  e.preventDefault();
});
