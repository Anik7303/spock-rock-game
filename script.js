const playerScoreEl = document.getElementById('player-score')
const playerChoiceEl = document.getElementById('player-choice')
const computerScoreEl = document.getElementById('computer-score')
const computerChoiceEl = document.getElementById('computer-choice')
const resultText = document.getElementById('result-text')

const playerRock = document.getElementById('player-rock')
const playerPaper = document.getElementById('player-paper')
const playerScissors = document.getElementById('player-scissors')
const playerLizard = document.getElementById('player-lizard')
const playerSpock = document.getElementById('player-spock')

const computerRock = document.getElementById('computer-rock')
const computerPaper = document.getElementById('computer-paper')
const computerScissors = document.getElementById('computer-scissors')
const computerLizard = document.getElementById('computer-lizard')
const computerSpock = document.getElementById('computer-spock')

const allGameIcons = document.querySelectorAll('.far')

const choices = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
}

let playerScore = 0
let computerScore = 0
let computerChoice = ''

// reset all 'selected' icons
function resetSelected() {
    allGameIcons.forEach((icon) => icon.classList.remove('selected'))
    stopConfetti()
    removeConfetti()
}

// random computer choice
function computerRandomChoice() {
    const choice = Math.random()
    if (choice < 0.2) {
        computerChoice = 'rock'
    } else if (choice < 0.4) {
        computerChoice = 'paper'
    } else if (choice < 0.6) {
        computerChoice = 'scissors'
    } else if (choice < 0.8) {
        computerChoice = 'lizard'
    } else {
        computerChoice = 'spock'
    }
}

// add 'selected' styling & computer choice
function displayComputerChoice() {
    switch (computerChoice) {
        case 'rock':
            computerRock.classList.add('selected')
            computerChoiceEl.textContent = ' --- Rock'
            break
        case 'paper':
            computerPaper.classList.add('selected')
            computerChoiceEl.textContent = ' --- Paper'
            break
        case 'scissors':
            computerScissors.classList.add('selected')
            computerChoiceEl.textContent = ' --- Scissors'
            break
        case 'lizard':
            computerLizard.classList.add('selected')
            computerChoiceEl.textContent = ' --- Lizard'
            break
        case 'spock':
            computerSpock.classList.add('selected')
            computerChoiceEl.textContent = ' --- Spock'
            break
    }
}

// check result, increase score & update result text
function updateScore(playerChoice) {
    if (playerChoice === computerChoice) {
        resultText.textContent = "It's a tie."
        return
    }
    const { defeats } = choices[playerChoice]
    if (defeats.indexOf(computerChoice) > -1) {
        startConfetti()
        resultText.textContent = 'You Won!'
        playerScore++
        playerScoreEl.textContent = playerScore
    } else {
        resultText.textContent = 'Computer Won!'
        computerScore++
        computerScoreEl.textContent = computerScore
    }
}

// call functions to process turn
function checkResult(playerChoice) {
    resetSelected()
    computerRandomChoice()
    displayComputerChoice()
    updateScore(playerChoice)
}

// passing player selection value and styling icons
function select(choice) {
    checkResult(choice)
    // add  'selected' styling & player choice
    switch (choice) {
        case 'rock':
            playerRock.classList.add('selected')
            playerChoiceEl.textContent = ' --- Rock'
            break
        case 'paper':
            playerPaper.classList.add('selected')
            playerChoiceEl.textContent = ' --- Paper'
            break
        case 'scissors':
            playerScissors.classList.add('selected')
            playerChoiceEl.textContent = ' --- Scissors'
            break
        case 'lizard':
            playerLizard.classList.add('selected')
            playerChoiceEl.textContent = ' --- Lizard'
            break
        case 'spock':
            playerSpock.classList.add('selected')
            playerChoiceEl.textContent = ' --- Spock'
            break
    }
}

// reset
function resetAll() {
    playerScore = 0
    playerScoreEl.textContent = playerScore
    playerChoiceEl.textContent = ''
    computerScore = 0
    computerScoreEl.textContent = computerScore
    computerChoiceEl.textContent = ''
    computerChoice = ''
    resetSelected()
}

// on load
resetAll()
