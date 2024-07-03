function getComputerChoice() {
    let num = Math.random();
    if (num >= 0 && num < .33){
        return "rock";
    } else if (num >= .33 && num < .66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getHumanChoice(){
    let choice = prompt("Rock, paper, or scissors?");
    return choice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        console.log("You win, " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    } else {
        console.log("You lose, " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
    }
}
function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanScore + " vs " + computerScore);
    if (humanScore > computerScore){
        console.log("You win!");
    } else {
        console.log("Computer wins.");
    }
}

playGame();