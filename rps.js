let playerScore = 0;
let computerScore = 0;
let roundWinner = ''

const choiceButtons = document.querySelectorAll('button');
const playerTotal = document.querySelector('.playerTotal');
const computerTotal = document.querySelector('.computerTotal');


choiceButtons.forEach((button) => {
    button.addEventListener('click', () => {

    userSelection = button.id 
    computerSelection = computerPlay();

    playRound(userSelection, computerSelection)
    });
});

function computerPlay() {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    let computerRandom = choices[Math.floor(Math.random() * choices.length)];
    return computerRandom;
}

const roundResult = document.getElementById("gameStatus");

function playRound(userSelection, computerSelection) {

    if (userSelection == 'ROCK' && computerSelection == 'ROCK') {
        roundResult.textContent = "It's a tie!";
        return 'tie';
    } else if (userSelection == 'PAPER' && computerSelection == 'PAPER') {
        roundResult.textContent = "It's a tie!";
        return 'tie';
    } else if (userSelection == 'SCISSORS' && computerSelection == 'SCISSORS') {
        roundResult.textContent = "It's a tie!";
        return 'tie';
    } else if (userSelection == 'PAPER' && computerSelection == 'ROCK') {
        roundResult.textContent = "You win the round! Paper beats Rock";
        playerScore++;
        roundWinner = 'player';
    } else if (userSelection == 'PAPER' && computerSelection == 'SCISSORS') {
        roundResult.textContent = "You lose the round! Scissors beat Paper" ;
        computerScore++;
        roundWinner = 'computer';
    } else if (userSelection == 'ROCK' && computerSelection == 'PAPER') {
        roundResult.textContent = "You lose the round! Paper beats Rock";
        computerScore++;
        roundWinner = 'computer';
    } else if (userSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        roundResult.textContent = "You win the round! Rock beats Scissors";
        playerScore++;
        roundWinner = 'player';
    } else if (userSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        roundResult.textContent = "You win the round! Scissors beat Paper";
        playerScore++;
        roundWinner = 'player';
    } else if (userSelection == 'SCISSORS' && computerSelection == 'ROCK') {
        roundResult.textContent = "You lose the round! Rock beats Scissors";
        computerScore++;
        roundWinner = 'computer';
    } else {
        roundResult.textContent = "Wrong weapon!";
    }   

    updateScore(playerScore, computerScore, roundWinner);
}

function updateScore(playerScore, computerScore, roundWinner) {
    if (!(playerScore>=5 || computerScore>=5)) {
        if (roundWinner == 'player') {
            playerTotal.textContent = `Player: ${playerScore}`
        } else if (roundWinner == 'computer') {
            computerTotal.textContent = `Computer: ${computerScore}`
        }
    } else {
        if (playerScore>computerScore) {
            alert (`You win the battle! ${playerScore}:${computerScore}`);
            window.location.reload();
        } else if (playerScore<computerScore) {
            alert (`You lose the battle! ${playerScore}:${computerScore}`);
            window.location.reload();
        }
    }
}