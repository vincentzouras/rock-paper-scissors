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
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")){
        console.log("You win, " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
        currentHumanScore.textContent = humanScore;
    } else if ((humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors")){
        console.log("You lose, " + computerChoice + " beats " + humanChoice + ".");
        computerScore++;
        currentComputerScore.textContent = computerScore;
    } else {
        console.log("tie" + computerChoice + humanChoice);
    }
}

let humanScore = 0;
let computerScore = 0;

let currentHumanScore = document.querySelector(".currentHumanScore");
let currentComputerScore = document.querySelector(".currentComputerScore");

const choseRock = document.querySelector(".rock");
choseRock.addEventListener("click", function() {
    playRound("rock", getComputerChoice());
})

const chosePaper = document.querySelector(".paper");
chosePaper.addEventListener("click", function() {
    playRound("paper", getComputerChoice());
})

const choseScissors = document.querySelector(".scissors");
choseScissors.addEventListener("click", function(){
    playRound("scissors", getComputerChoice());
})