let computerScore = 0;
let playerScore = 0;
let rounds;
let result;
let computerSelection;
let playerSelection;

//generates computer's selection
/**************Will only pick once for all rounds */
function computerPlay(){
    let play = Math.random();

    if (play <= 0.333){
        return "rock";
    }
    else if (play <=.666){
        return "paper";
    }
    else {
        return "scissors";
    }
}
computerSelection = computerPlay();

//Plays one round of game, returns an alert saying if player won or lost, tied, or did not enter an accepted value.
function playRound(playerSelection, computerSelection){

playerSelection = prompt("Choose: rock, paper, or scissors?");   
    // Changing if's and else if's to return result
    if (playerSelection === "rock" && computerSelection === "scissors"){
        result = "win";
        alert ("You win! Rock beats scissors!");
        return result;
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        result = "lose";
        alert("You lose! Paper covers rock!");
        return result;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        result = "lose";
        alert("You lose! Rock beats scissors!");
        return result;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        result = "win";
        alert("You win! Scissors beats paper!");
        return result;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        result = "lose";
        alert("You lose! Scissors beats paper!");
        return result;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        result = "win";
        alert("You win! Paper covers rock!");
        return result;
    }
    else if (playerSelection === computerSelection){
        result = "tie";
        alert("It's a tie!");
        return result;
    }
    else {return alert("Try again! Enter rock, paper, or scissors.");
    }
}
//console.log(playRound(playerSelection, computerSelection));
//Would like this function to play 5 rounds while keeping score between player and computer to identify winner. Stuck on how to keep score. 
function game(){
    /************will run 4 rounds */
    for (rounds=1; rounds<5; rounds++){
    playRound(playerSelection,computerSelection);

    //let scoreKeeper = result.playRound(playerSelection, computerSelection);
    let scoreKeeper = result;

    //if (scoreKeeper = "win"){
    if (scoreKeeper === "win"){
        playerScore++;
    }
    //else if (scoreKeeper = "lose"){
    else if (scoreKeeper === "lose"){
        computerScore++;
    }
} 

    if (playerScore > computerScore){
        return "Score is: " + playerScore + " to " + computerScore + " You win! Congratulations!";
    }
    else{
        return "Score is: " + playerScore + " to " + computerScore + " You lose! Try again!";
    }
}

console.log(game());