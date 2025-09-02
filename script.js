// const rock = "rock";
// const paper = "paper";
// const scissors = "scissors";

// function getComputerChoice() {
//     let x = Math.floor(Math.random() * 3);
//     if (x === 0) return rock;
//     if (x === 1) return paper;
//     return scissors;
// }

// function getHumanChoice() {
//     let choice;
//     do {
//         choice = prompt("Rock, paper, or scissors? Choose one:").toLowerCase();
//         if (choice === rock || choice === paper || choice === scissors) {
//             return choice;
//         }
//         console.log("Wrong input. Please choose rock, paper, or scissors.");
//     } while (true);
// }

// function playRound(humanChoice, computerChoice, scores) {
//     if (humanChoice === computerChoice) {
//         scores.humanScore++;
//         scores.computerScore++;
//         console.log(`It's a tie! Both chose ${humanChoice}. Your score: ${scores.humanScore}, Computer's score: ${scores.computerScore}`);
//         return;
//     }
//     if (humanChoice === rock && computerChoice === scissors) {
//         scores.humanScore++;
//         console.log(`You win! ${humanChoice} beats ${computerChoice}. Your score: ${scores.humanScore}, Computer's score: ${scores.computerScore}`);
//         return;
//     }
//     if (humanChoice === paper && computerChoice === rock) {
//         scores.humanScore++;
//         console.log(`You win! ${humanChoice} beats ${computerChoice}. Your score: ${scores.humanScore}, Computer's score: ${scores.computerScore}`);
//         return;
//     }
//     if (humanChoice === scissors && computerChoice === paper) {
//         scores.humanScore++;
//         console.log(`You win! ${humanChoice} beats ${computerChoice}. Your score: ${scores.humanScore}, Computer's score: ${scores.computerScore}`);
//         return;
//     }
//     scores.computerScore++;
//     console.log(`You lose! ${computerChoice} beats ${humanChoice}. Your score: ${scores.humanScore}, Computer's score: ${scores.computerScore}`);
// }

// function playGame() {
//     let rounds = 0;
//     let scores = { humanScore: 0, computerScore: 0 };

//     while (rounds < 5) {
//         rounds++;
//         console.log(`Round ${rounds}`);
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice, scores);
//     }

//     if (scores.humanScore > scores.computerScore) {
//         console.log(`You won the game! Final score: You ${scores.humanScore}, Computer ${scores.computerScore}`);
//     } else if (scores.computerScore > scores.humanScore) {
//         console.log(`Computer won the game! Final score: You ${scores.humanScore}, Computer ${scores.computerScore}`);
//     } else {
//         console.log(`It's a tie game! Final score: You ${scores.humanScore}, Computer ${scores.computerScore}`);
//     }
// }

// playGame();



const rock = "rock";
const paper = "paper";
const scissors = "scissors";

// DOM elements
const btnPaper = document.querySelector("#btnPaper");
const btnRock = document.querySelector("#btnRock");
const btnScissors = document.querySelector("#btnScissors");
const btnreset = document.querySelector("#reset")
const container = document.querySelector("#container");


const output = document.createElement("span");
output.classList.add("output");

const playerTally = document.createElement("p");
playerTally.classList.add("playerTally");

const computerTally = document.createElement("p");
computerTally.classList.add("computerTally");

const rounds = document.createElement("p")
rounds.classList.add("rounds")


container.append(output, playerTally, computerTally,rounds);

// Styling
container.style.marginTop = "50px";
output.style.fontSize = "50px";



// Score variables
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;




function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) return rock;
    if (x === 1) return paper;
    return scissors;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        output.textContent = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === rock && computerChoice === scissors) ||
        (humanChoice === paper && computerChoice === rock) ||
        (humanChoice === scissors && computerChoice === paper)
    ) {
        playerScore++;
        roundsPlayed++;
        output.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        roundsPlayed++;
        output.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    // Update score display
    playerTally.textContent = `Player score: ${playerScore}`;
    computerTally.textContent = `Computer score: ${computerScore}`;
    rounds.textContent =`Rounds score: ${roundsPlayed}`

    // Check for winner
    victor();
}

function victor() {
    if (playerScore >= 5 || computerScore >= 5) {
        // Disable buttons to stop the game
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;

        // Display winner
        if (playerScore >= 5) {
            output.textContent = `CONGRATULATIONS PRINCESS ❤️ You win with ${playerScore} points!`;
        } else {
            output.textContent = `Game Over! Computer wins with ${computerScore} points!`;
        }
    }
}

// Event listeners for buttons
btnRock.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const humanChoice = rock;
    playRound(humanChoice, computerChoice);
});

btnPaper.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const humanChoice = paper;
    playRound(humanChoice, computerChoice);
});

btnScissors.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const humanChoice = scissors;
    playRound(humanChoice, computerChoice);
});

btnreset.addEventListener("click",()=>{
    window.location.reload()
})
 



