const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");
const roundresult = document.querySelector(".score");
const compscoreh = document.querySelector("#pcscoreh");
const userscoreh = document.querySelector("#playerscoreh");
const resetbtn = document.querySelector("#reset");

resetbtn.addEventListener('click', () => location.reload());

let playerscore = 0;
let pcscore = 0;

/*Specific functions to make choice for the user. */
function rock(){
    playRound("rock", computerPlay())
};
function paper(){
    playRound("paper", computerPlay())
};
function scissors(){
    playRound("scissors", computerPlay())
};

rockbtn.addEventListener("click", rock);
paperbtn.addEventListener("click",paper);
scissorsbtn.addEventListener("click", scissors);
    

/*This function generates a choice between 1-3 */
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


/*Function determins who wins, adds and displays scores. */
function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(computerSelection == playerSelection){
         roundresult.textContent = "It's a tie!";
    }
    else if((computerSelection == "rock" && playerSelection == "paper") || (computerSelection == "paper" && playerSelection == "scissors") || (computerSelection == "scissors" && playerSelection == "rock")){
         userscoreh.textContent = ++playerscore;
         roundresult.textContent = `You win! ${playerSelection} beats ${computerSelection}`;

    }
    else if((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")){
         compscoreh.textContent = ++pcscore;
         roundresult.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
 checkWinner();
};


/*To check total rounds and the winner */
const winnerResults = {
    computer: ["You Lost the game to a computer!"],
    player: ["You Win the game!!!!"],
    tie: ["The game is a Tie!"]
}

function checkWinner(){
    if(playerscore === 5 || pcscore === 5){
        if(playerscore === pcscore){
            updateWinner('tie');
        }
        else{
            let win = `${(playerscore > pcscore) ? 'player' : 'computer'}`;
            updateWinner(win);
        }
    }
};

function updateWinner(winner){
    roundresult.textContent = winnerResults[winner][0];

    rockbtn.removeEventListener("click", rock);
    paperbtn.removeEventListener("click", paper);
    scissorsbtn.removeEventListener("click", scissors);
}