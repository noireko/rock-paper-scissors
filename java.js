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
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else if (choice == 2) {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log(`PC picks ${computerChoice}, You Loose`);
    return "Loose";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(`PC picks ${computerChoice}, You Win`);
    return "Win";
  } else if (humanChoice === "rock" && computerChoice === "rock") {
    console.log(`PC picks ${computerChoice}, It's a Tie`);
    return "Tie";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log(`PC picks ${computerChoice}, You Loose`);
    return "Loose";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`PC picks ${computerChoice}, You Win`);
    return "Win";
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log(`PC picks ${computerChoice}, It's a Tie`);
    return "Tie";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log(`PC picks ${computerChoice}, You Loose`);
    return "Loose";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`PC picks ${computerChoice}, You Win`);
    return "Win";
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log(`PC picks ${computerChoice}, It's a Tie`);
    return "Tie";
  }
}

function playGame(humanChoice) {
  const computer = pcChoice();
  const result = playRound(humanChoice, computer);

  if (result === "Win") {
    humanScore++;
    console.log("You win this round!");
  } else if (result === "Loose") {
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
