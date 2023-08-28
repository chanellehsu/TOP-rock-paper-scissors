console.log("Hi");

const options = ["scissors","paper","stone"];

//Get computer choice
function getComputerChoice(){
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
};

/*

function checkWinner(playerSelection,computerSelection){
    if (playerSelection == computerSelection){
        return "Tie"
    } else if(
        (playerSelection == "stone" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "stone")
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
        const choice = button.value;
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
*/

//hides the play Section and selection menu when either player or computer score reaches 5
function hidePlaySection(){
    const playSection = document.querySelector(".play-section");
    const selectionMenu = document.querySelector(".selection-menu");
    playSection.style.display= "none";
    selectionMenu.style.display="none";

}

function showSuccessImage(){
    document.getElementById('image-section').innerHTML = "<img src= 'assets/success.png' />"; 
};

function showFailureImage(){
    document.getElementById('image-section').innerHTML = "<img src= 'assets/failure.png' />"; 
};


/*
function announceResultComputer(){
    const scoreSection = document.querySelector(".score-section");
    const content = document.createElement("h3");
    content.textContent = "Computer has won, better luck next time";
    scoreSection.appendChild(content)
}

function announceResultPlayer(){
    const scoreSection = document.querySelector(".score-section");
    const content = document.createElement("h3");
    content.textContent = "Congratulations, you have won";
    scoreSection.appendChild(content)
}
*/

//Get the current score of player & computer
let scorePlayer = parseInt(document.getElementById("score-player").innerHTML);
let scoreComputer = parseInt(document.getElementById("score-computer").innerHTML);

console.log(typeof(scorePlayer),typeof(scoreComputer));


function game(event){
    console.log("Game starts here");
    console.log(event);
    //get choice of player selection
    const playerSelection = event.srcElement.alt; //to be edited
    const computerSelection = getComputerChoice();

    if (scorePlayer <= 4 && scoreComputer <= 4){
        if (playerSelection === computerSelection){
            announcement.textContent = `It's a tie this round! You selected ${playerSelection}, computer selected ${computerSelection}`
        } else if(
            (playerSelection == "stone" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "stone")
        ){
            scoreComputer++;
            console.log(playerSelection,computerSelection);
            document.getElementById("score-computer").innerHTML = scoreComputer;
            announcement.textContent = `Computer won this round, ${computerSelection} beats ${playerSelection}`;

        } else {
            scorePlayer++;
            console.log(playerSelection,computerSelection);
            document.getElementById("score-player").innerHTML = scorePlayer;
            announcement.textContent = `Player won this round, ${playerSelection} beats ${computerSelection}`;
        };
    };

          //showing the score after
        //console.log("after" + scorePlayerNew);
        //console.log("after" + scoreComputerNew);

    

    if (scorePlayer == 5 || scoreComputer== 5){
        hidePlaySection();
        const resultSection = document.getElementById("result");
        if (scorePlayer > scoreComputer){
            resultSection.textContent = "Congratulations, you have won";
            showSuccessImage();
        } else if (scoreComputer > scorePlayer) {
            resultSection.textContent = "Computer has won, better luck next time";
            showFailureImage();
        };

        //console.log("after" + scorePlayerNew);
        //console.log("after" + scoreComputerNew);
    }
};

  



let buttonList = document.querySelectorAll("button");
  buttonList.forEach(function(i){
    i.addEventListener("click", game)
  });





/*
const myButtons = document.querySelectorAll("button");

myButtongs.addEventListener("click", function (event) {
    console.log(event.target.innerHTML);
 });
 */

//Consider adding GLOBAL VARIABLES

/*
//let buttons = document.querySelectorAll('.button');
const buttons = document.querySelectorAll('input')
console.log(buttons);

buttons.forEach((button)=>{
    button.addEventListener('click',console.log(button))
});
*/


/*
let clickEvent = () => {
    console.log('some event content here...')
}
elements.forEach((item) => {
    item.addEventListener('click', clickEvent)
});
*/