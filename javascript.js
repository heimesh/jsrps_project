function computerPlay(){
    let x = Math.floor((Math.random() * 3) +1)

    let computerChoice
    
    if(x === 1){
        computerChoice = "Rock"
    }
    else if (x === 2){
        computerChoice = "Paper"
    }
    else {
        computerChoice = "Scissors"
    }
    return computerChoice
}

let playerscore = 0;
let pcscore = 0;

function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(computerSelection == playerSelection){
        console.log("It's a tie!");
    }
    else if((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock")){
        console.log("You win!");
        playerscore++;
    }
    else if((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")){
        console.log("Computer Wins!");
        pcscore++;
    }
};

function game(){
    let playerInput = "";
    for(let i = 1; i <= 5; i++){
        playerInput = prompt("sup?");
        playRound(playerInput,computerPlay());
    };
 console.log("Pc score:", pcscore);
 console.log("Player score:", playerscore);
};

console.log(game());