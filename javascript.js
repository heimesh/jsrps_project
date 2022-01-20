/*This function generates a number between 1-3 */
function computerPlay(){
    let x = Math.floor((Math.random() * 3) +1)
    let computerChoice
    
    switch (x) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
    return computerChoice;
}


let playerscore = 0;
let pcscore = 0;
let winner = "";

/*Func determins who wins and adds scores. */
function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(computerSelection == playerSelection){
         winner = "It's a tie!";
    }
    else if((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock")){
         winner = "Player wins";
        playerscore++;
    }
    else if((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")){
         winner = "Computer Wins!";
        pcscore++;
    }
};



const rockbtn = document.querySelector("#rck");
const paperbtn = document.querySelector("#paper");
const scsrs = document.querySelector("#scsrs");
const body = document.querySelector("body");
const div = document.querySelector(".score");
const para = document.querySelector("p");

/*Plays one round based on user's choice. And displays the scores */
function gameController(){
    rockbtn.addEventListener("click", () => {
        playRound("rock", computerPlay())
        div.textContent = winner;
        para.textContent = "Pc's score:" + pcscore + "Player score:" + playerscore;
        div.append(para);
    });
    
    paperbtn.addEventListener("click", () => {
        playRound("paper", computerPlay())
        div.textContent = winner;
        para.textContent = "Pc's score:" + pcscore + "Player score:" + playerscore;
        div.append(para);
    });
    
    scsrs.addEventListener("click", () => {
        playRound("scissors", computerPlay())
        div.textContent = winner;
        para.textContent = "Pc's score:" + pcscore + "Player score:" + playerscore;
        div.append(para);
    });
}

/*Plays 5 rounds and resets the scores. */
function roundChecker(){
    if(pcscore != 5 || playerscore != 5){
    gameController();
    }
    else{
        if(pcscore >= 5){
            div.textContent = "Pc is the final winner!";
        }
        else{
            div.textContent = "Player is the final winner!";
        }
        pcscore = 0;
        playerscore = 0;
        para.textContent = "Pc's score:" + pcscore + "Player score:" + playerscore;
        div.append(para);
    }
};

roundChecker();

