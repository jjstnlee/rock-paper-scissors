let computerScore = 0
let humanScore = 0

function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        console.log("rock")
        return "rock"
    } else if (computerChoice === 2) {
        console.log("paper")
        return "paper"
    } else {
        console.log("scissors")
        return "scissors"
    }
}

function getHumanChoice() {
    let input = prompt("Enter input").toLowerCase()
    if (input != "rock" && input != "paper" && input != "scissors") {
        console.log("wrong type")
    }
    console.log(input)
    return input
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Tie!")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose!")
        computerScore++
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win!")
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win!")
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Tie!")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose!")
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose!")
        computerScore++
    } else  if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win!")
        humanScore++
    } else {
        console.log("Tie!")
    }
    console.log(`human score: ${humanScore}, computer score: ${computerScore}`)
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
}

playGame()
