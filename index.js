function computerPlay(){
    let num = Math.floor((Math.random() * 3) + 1);
    if(num == 1){
        return "rock";;
    }else if(num == 2){
        return "scissors";
    }else if(num == 3){
        return "paper";
    }
}
function round(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection == computerSelection){
        return "tie"
    }else if((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")){
        return "computer won"
    }else{
        return "player won"
    }
}
const buttons = document.querySelectorAll('button');
const p = document.getElementsByTagName("p");
let computer
buttons.forEach((button) => {
    button.addEventListener('click', () => {  
        computer = computerPlay()
        if(button.id == 1){
            p[0].innerHTML = round('rock',computer)
            p[1].innerHTML = "computer chose "+computer
        }else if(button.id == 2){
            p[0].innerHTML = round('paper',computer)
            p[1].innerHTML = "computer chose "+computer
        }else if(button.id == 3){
            p[0].innerHTML = round('scissors',computer)
            p[1].innerHTML = "computer chose "+computer
        }
    });
  });