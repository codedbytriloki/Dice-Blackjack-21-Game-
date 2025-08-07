const rollBtn = document.getElementById("rollBtn");
const stopBtn = document.getElementById("stopBtn");
const gameResult = document.getElementById("gameResult");
const totalScoreEl = document.getElementById("total");

let totalScore = 0;

function rollDice(){
  const roll = Math.floor(Math.random() * 6) + 1;
  totalScore += roll;
  totalScoreEl.textContent = totalScore;

  if(totalScore > 21){
    gameResult.textContent = "You exceeded 21 ! You lose !";
    gameResult.style.color = 'red';

    disableGame();
  }
}

function stopGame(){
  if(totalScore === 21){
    gameResult.textContent = "You 21 ! You win !";
    gameResult.style.color = "white";
  }
  else{
    gameResult.textContent = `Your final Score : ${totalScore}. Try again !`;
    gameResult.style.color = "red";
  }
  disableGame();
}

function disableGame(){
  rollBtn.disabled = true;
  stopBtn.disabled = true;
}

rollBtn.addEventListener('click', rollDice);
stopBtn.addEventListener('click', stopGame);

