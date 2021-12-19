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

