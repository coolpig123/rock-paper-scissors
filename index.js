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
const buttons = document.getElementsByClassName('btn');
const buttonsTwo = document.getElementsByClassName('btnTwo');
const p = document.getElementsByTagName("p");
let computer
for(let i = 0;i< buttons.length;i++){
    buttons[i].addEventListener('click', () => {  
        computer = computerPlay()
        for(let k = 0;k<buttons.length;k++){
            if(k == i){
                buttons[k].style.backgroundColor = 'Red'
            }else {
                buttons[k].style.backgroundColor = 'Blue'
            }
        }
        if(buttons[i].id == 1){
            for(let j = 0;j< buttonsTwo.length;j++){
                if(buttonsTwo[j].innerHTML == computer){
                    buttonsTwo[j].style.backgroundColor = 'Red'
                }else {
                    buttonsTwo[j].style.backgroundColor = 'Blue'
                }
            }
            p[0].innerHTML = round('rock',computer)
        }else if(buttons[i].id == 2){
            for(let j = 0;j< buttonsTwo.length;j++){
                if(buttonsTwo[j].innerHTML == computer){
                    buttonsTwo[j].style.backgroundColor = 'Red'
                }else {
                    buttonsTwo[j].style.backgroundColor = 'Blue'
                }
            }
            p[0].innerHTML = round('paper',computer)
        }else if(buttons[i].id == 3){
            for(let j = 0;j< buttonsTwo.length;j++){
                if(buttonsTwo[j].innerHTML == computer){
                    buttonsTwo[j].style.backgroundColor = 'Red'
                }else {
                    buttonsTwo[j].style.backgroundColor = 'Blue'
                }
            }
            p[0].innerHTML = round('scissors',computer)
        }
    });
}
    
