// PIEDRA PAPEL O TIJERA
// El usuario promptea piedra papel o tijera
// Si no pone algo qu no sea eso tira mensaje de mandarlo bien
// El input se tiene que pasar a minusculas
// El programa elige al azar entre 1,2,3
// 1 piedra, 2 papel, 3 tijera
// Consolelog el ganador dependindo lo q elija cada uno

let humanScore = 0
let computerScore = 0

function pcChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else if (choice == 2) {
        return "scissors";
    }
}

function userChoice() {
    prompt("Choose your option: Rock, Paper, or Scissors");
}

function playRound(humanChoice, computerChoice) {
    let humanChoice = userChoice()
    let computerChoice = pcChoice()
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("PC picks paper, You Loose")
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("PC picks paper, You Win")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("PC picks paper, it's a Tie")
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("PC picks scissors, You Loose")
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("PC picks rock, You Win")
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("PC picks paper, it's a Tie")
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("PC picks rock, You Loose")
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("PC picks paper, You Win")
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("PC picks scissors, it's a Tie")
    }
}

function playGame(roundPlayed) {
    roundPlayed = playRound()
    if (roundPlayed.includes("Win")) {
        console.log(humanScore + 1);
        console.log(computerScore);
    } else if (roundPlayed.includes("Loose")) {
        console.log(humanScore);
        console.log(computerScore + 1);
    } else if (roundPlayed.includes("Tie")) {
        console.log(humanScore);
        console.log(computerScore);
    }
}

playGame();
playGame();
playGame();
playGame();
playGame();

if (humanScore > computerScore) {
    console.log("The user wins the game!")
} else if (humanScore < computerScore) {
    console.log("The PC wins the game...") 
} else if (humanSore == computerScore) {
    console.log("It's a tie!")
}