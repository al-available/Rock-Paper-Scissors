 const rock = "rock"
 const paper = "paper"
 const scissors = "scissors"

function getComputerChoice(){
    let x = (Math.floor(Math.random()* 3))
    if(x == 0) return rock
    if (x == 1) return paper
    return scissors
     
}



function getHumanChoice(){
    let choice = prompt("rock, paper, or scissors  choose one")
    if (choice === "rock" || choice === "paper" || choice === "scissors" ){
        console.log (choice)
    }
    else {
        console.log ("wrong input ")
    }
    
    return choice
}



function playRound(humanChoice, computerChoice) {
  if (humanSelection == computerSelection){
    console.log("it's a tie")
  }
  if (humanSelection == rock && computerSelection == scissors){
  console.log ("You won! rock beats scissors")
  }
  
 if (humanSelection == scissors && computerSelection == rock){
  console.log ("you lose ! rock beats scissors")
}
 if (humanSelection == scissors && computerSelection == paper){
console.log ("You won! scissors beats paper")
  }
  
if (humanSelection === paper && computerSelection === scissors){
  console.log ("you lose ! scissors beats paper")
}
 if (humanSelection === paper && computerSelection === rock){
  console.log ("You won! paper beats rock")
  }
  
 if (humanSelection === rock && computerSelection === paper){
  console.log ("you lose ! paper beats rock")
}
  
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
