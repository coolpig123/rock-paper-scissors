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
    if((playerSelection === "rock" && computerSelection == "rock") || (playerSelection === "paper" && computerSelection == "paper") ||(playerSelection === "scissors" && computerSelection == "scissors")){
        return "tie";
    }else if((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "papar") || (playerSelection === "rock" && computerSelection === "scissors")){
        return "player won";
    }else if((computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "papar") || (computerSelection === "rock" && playerSelection === "scissors")){
        return "computer won";
    }
}
function play(){
    let playerScore = 0;
    let computerScore = 0;
    let player;
    let computer;
    for(let i = 0; i<5 ;i++){
        player = window.prompt();
        computer = computerPlay();
        console.log("computer chose : "+computer);
        console.log(round(player,computer));
        if(round(player,computer) === "player won"){
            playerScore++;
        }else if(round(player,computer) === "computer won"){
            computerScore++;
        }
    }
    console.log("player's score is : "+playerScore);
    console.log("computer's score is : "+computerScore);
    if(playerScore > computerScore){
        console.log("player won");
    }else if(computerScore > playerScore){
        console.log("computer won");
    }else{
        console.log("tie");
    }
}
play();