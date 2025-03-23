// Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById("game"); // Get game field

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) { // Prevent moving beyond left boundary
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  
  const gameWidth = game.clientWidth; // Get game field width
  const dodgerWidth = dodger.clientWidth; // Get dodger width

  if (left + dodgerWidth < gameWidth) { // Prevent moving beyond right boundary
    dodger.style.left = `${left + 1}px`;
  }
}

  
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
// Event listener for key press
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
