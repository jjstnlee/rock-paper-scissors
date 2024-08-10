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
    const scoreboard = document.querySelector("#scores")
    scoreboard.textContent = `Results: Your choice: ${humanChoice}, Computer's choice: ${computerChoice}. Your score: ${humanScore}, Oponent's score: ${computerScore}`
}

const choices = document.querySelector("#choices")
choices.addEventListener('click', (event) => {
    let target = event.target
    playRound(target.id, getComputerChoice())
    const scoreboard = document.querySelector("#scores")
    if (humanScore === 5) {
        scoreboard.textContent = `Results: You win! Your score: ${humanScore} Computer's score: ${computerScore}`
    } else if (computerScore === 5) {
        scoreboard.textContent = `Results: You lose. Your score: ${humanScore} Computer's score: ${computerScore}`
    }
})
