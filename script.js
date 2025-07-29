const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) return rock;
    if (x === 1) return paper;
    return scissors;
}

function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Rock, paper, or scissors? Choose one:").toLowerCase();
        if (choice === rock || choice === paper || choice === scissors) {
            return choice;
        }
        console.log("Wrong input. Please choose rock, paper, or scissors.");
    } while (true);
}

function playRound(humanChoice, computerChoice, scores) {
    if (humanChoice === computerChoice) {
        scores.humanScore++;
        scores.computerScore++;
        console.log(`It's a tie! Both chose ${humanChoice}. Your score: ${scores.humanScore}, Computer's score: ${scores.computerScore}`);
        return;
    }
    if (humanChoice === rock && computerChoice === scissors) {
        scores.humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}. Your score: ${scores.humanScore}, Computer's score: ${scores.computerScore}`);
        return;
    }
    if (humanChoice === paper && computerChoice === rock) {
        scores.humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}. Your score: ${scores.humanScore}, Computer's score: ${scores.computerScore}`);
        return;
    }
    if (humanChoice === scissors && computerChoice === paper) {
        scores.humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}. Your score: ${scores.humanScore}, Computer's score: ${scores.computerScore}`);
        return;
    }
    scores.computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}. Your score: ${scores.humanScore}, Computer's score: ${scores.computerScore}`);
}

function playGame() {
    let rounds = 0;
    let scores = { humanScore: 0, computerScore: 0 };

    while (rounds < 5) {
        rounds++;
        console.log(`Round ${rounds}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice, scores);
    }

    if (scores.humanScore > scores.computerScore) {
        console.log(`You won the game! Final score: You ${scores.humanScore}, Computer ${scores.computerScore}`);
    } else if (scores.computerScore > scores.humanScore) {
        console.log(`Computer won the game! Final score: You ${scores.humanScore}, Computer ${scores.computerScore}`);
    } else {
        console.log(`It's a tie game! Final score: You ${scores.humanScore}, Computer ${scores.computerScore}`);
    }
}

playGame();