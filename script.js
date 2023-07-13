console.log("Hi");

const options = ["rock","paper","scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
};

getComputerChoice();

function checkWinner(playerSelection,computerSelection){
    if (playerSelection == computerSelection){
        return "Tie"
    } else if(
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    ){
        return "Computer"
    } else {
        return "Player"
    }
}

function playRound (playerSelection,computerSelection){
    const result = checkWinner(playerSelection,computerSelection);
    if(result == "Tie"){
        return "It is a tie"
    } else if(result =="Computer"){
        return `You Lose. ${computerSelection} beats ${playerSelection}.`
    } else {
        return `You Win. ${playerSelection} beats ${computerSelection}.`
    }
}

function getPlayerChoice(){
    let validatedInput=false;
    while(validatedInput==false){
        const choice = prompt("Enter rock, paper or scissors");
        if(choice == null){
            continue;
        } 
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput=true;
            return choiceInLower;
        }
    }
}


function game(){
    let scorePlayer=0;
    let scoreComputer=0;
    console.log("Welcome");
    for (let i=0; i<5; i++){
        console.log(`This is round ${i}`);
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log(`Player Selection was: ${playerSelection}`);
        console.log(`Computer Selection was: ${computerSelection}`);
        console.log("============")
    };
    if(checkWinner(playerSelection,computerSelection)=="Player"){
        scorePlayer++;
    } else if (checkWinner(playerSelection,computerSelection)=="Computer"){
        scoreComputer++;
    }
    console.log("GAME OVER AMIGOS");
    if(scoreComputer>scorePlayer){
        return "You lost"
    } else if (scorePlayer>scoreComputer){
        return "You won"
    } else {
        return "It's a tie!"
    };
}

game();
