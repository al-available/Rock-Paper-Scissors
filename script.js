

function getComputerChoice(){
    let x = (Math.floor(Math.random()* 3))
    if(x === 0){
        console.log("rock");
     } else if(x === 1){
            console.log("paper")
        }
        else{
            console.log("scissors")
        }

    
    
}
getComputerChoice()


