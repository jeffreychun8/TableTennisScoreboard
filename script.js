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
  updateServer();
  

}

function addRight() {
  rightScore++;
  displayRight();
  updateServer();
 
}


function subtractLeft() {
  if (leftScore > 0) {
    leftScore--;
    displayLeft();
     updateServer();
    
  } }

function subtractRight() {
  if (rightScore > 0) {
    rightScore--;
    displayRight();
     updateServer();
   
  }  }


function resetScores() {
  leftScore = 0;
  rightScore = 0;
  updateMarquee();
  updateServer();
  displayLeft();
  displayRight();

}

function updateMarquee() {
    const marqueeDiv = document.getElementById("marquee");
    marqueeDiv.textContent = `Current Rounds Score: ${leftRoundsScore} : ${rightRoundsScore}`;
}



//alert winner

function checkWinner() {
  const winnerDiv = document.getElementById("winner-text");
  if (leftScore >= 11 && leftScore - rightScore >= 2) {
    alert("Player A Wins this round!");
    leftRoundsScore++;
    roundsScore();
    updateMarquee();
    resetScores();
    winnerText();
  } else if (rightScore >= 11 && rightScore - leftScore >= 2) {
    alert("Player B Wins this round!");
    rightRoundsScore++;
    roundsScore();
    updateMarquee();
    resetScores();
    winnerText();
  }

}


leftRoundsScore = 0;
rightRoundsScore = 0;

function roundsScore() {
  const roundsDiv = document.getElementById("rounds");
  roundsDiv.textContent = leftRoundsScore + ":" + rightRoundsScore; ;
  
}


function winnerText(){
  if (leftRoundsScore === 3){
    alert ("Player A is the overall winner!");
    leftRoundsScore = 0;
    rightRoundsScore = 0;
    roundsScore();
  }
  else if (rightRoundsScore === 3){   
    alert ("Player B is the overall winner!");
    leftRoundsScore = 0;
    rightRoundsScore = 0;
    roundsScore();
  }

}

function updateServer() {
  const totalPoints = leftScore + rightScore;
  const totalRounds = leftRoundsScore + rightRoundsScore;
  let baseServer;

  //decides who starts serving
  if (totalRounds % 2 === 0) {
    baseServer = "A";
  } else {
    baseServer = "B";
  }

  // switch serve during the round
  if (leftScore >= 10 && rightScore >= 10) {
    // deuce: switch every point
    server = totalPoints % 2 === 0 ? baseServer : (baseServer === "A" ? "B" : "A");
  } else {
    // normally: switch every 2 points
    server = Math.floor(totalPoints / 2) % 2 === 0 ? baseServer : (baseServer === "A" ? "B" : "A");
  }

  updateServe(); 
}


function updateServe() {
  const leftServe = document.getElementById("left-serve");
  const rightServe = document.getElementById("right-serve");

  if (server === "A") {
    leftServe.textContent = "🏓";
    rightServe.textContent = "";
  } else {
    leftServe.textContent = "";
    rightServe.textContent = "🏓";
  }
}
