var leftScore = 0;
var rightScore = 0;

//display functions
function displayLeft() {
  document.getElementById("left-score").textContent = leftScore;
}

function displayRight() {
  document.getElementById("right-score").textContent = rightScore;
}

//increment functions
function addLeft() {
  leftScore++;
  displayLeft();
}

function addRight() {
  rightScore++;
  displayRight();
}


function subtractLeft() {
  if (leftScore > 0) {
    leftScore--;
    displayLeft();
  } }

function subtractRight() {
  if (rightScore > 0) {
    rightScore--;
    displayRight();
  }  }


function resetScores() {
  leftScore = 0;
  rightScore = 0;
  displayLeft();
  displayRight();
}
//alert winner

function checkWinner() {
  const winnerDiv = document.getElementById("winner-text");
  if (leftScore >= 11 && leftScore - rightScore >= 2) {
    alert("Player A Wins!");
  } else if (rightScore >= 11 && rightScore - leftScore >= 2) {
    alert("Player B Wins!");
  }
}
