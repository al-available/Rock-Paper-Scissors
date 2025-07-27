    function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }

     function getPlayerChoice() {
      let playerInput = prompt("Choose rock, paper, or scissors:").toLowerCase();
      // Add validation to ensure valid input
      while (!['rock', 'paper', 'scissors'].includes(playerInput)) {
        playerInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
      }
      return playerInput;
    }
        function determineWinner(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return "It's a tie!";
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        return "You win!";
      } else {
        return "You lose!";
      }
    }
        function playRound() {
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      console.log(`You chose: ${playerSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
      console.log(determineWinner(playerSelection, computerSelection));
    }

     
    function playGame() {
       for (let i = 0; i < 5; i++) { 
         playRound();
       }
     }
    playGame();
