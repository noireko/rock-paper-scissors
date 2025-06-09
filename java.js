// PIEDRA PAPEL O TIJERA
// El usuario promptea piedra papel o tijera
// Si no pone algo qu no sea eso tira mensaje de mandarlo bien
// El input se tiene que pasar a minusculas
// El programa elige al azar entre 1,2,3
// 1 piedra, 2 papel, 3 tijera
// Consolelog el ganador dependindo lo q elija cada uno

let humanScore = 0;
let computerScore = 0;

function pcChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  console.log(`You chose ${humanChoice}, PC chose ${computerChoice}`);
  if (humanChoice === computerChoice) return "Tie";

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Win";
  } else {
    return "Lose";
  }
}

function playGame(humanChoice) {
  const computer = pcChoice();
  const result = playRound(humanChoice, computer);

  if (result === "Win") {
    humanScore++;
    console.log("You win this round!");
  } else if (result === "Lose") {
    computerScore++;
    console.log("You lose this round!");
  } else {
    console.log("It's a tie!");
  }

  console.log(`Score — You: ${humanScore}, PC: ${computerScore}`);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userPick = button.id;
    playGame(userPick);
  });
});
