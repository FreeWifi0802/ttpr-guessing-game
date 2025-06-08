"use strict";
/*

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/
/*
NUMBER GUESSING GAME
Implement the missing code based on the comments
*/
// Generate random number between 1-100 (inclusive)
function generateWinningNumber() {
    // Return random integer
    return Math.floor(Math.random() * 100) + 1;
}
// Shuffle array using Fisher-Yates algorithm
function shuffle(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        let randomInt = Math.ceil(Math.random() * i);
        let temp = array[i];
        array[i] = array[randomInt];
        array[randomInt] = temp;
    }
    return array;
}
class Game {
    constructor() {
        this.gameOver = false;
        this.maxNumGuesses = 5;
        // Initialize properties:
        // - playersGuess (current guess)
        // - pastGuesses (array of previous guesses)
        // - winningNumber (generated number)
        this.playersGuess = null;
        this.pastGuesses = [];
        this.winningNumber = generateWinningNumber();
    }
    // Return absolute difference between guess and winning number
    difference() {
        // Calculate and return difference
        return Math.abs(this.winningNumber - this.playersGuess);
    }
    // Return true if guess is lower than winning number
    isLower() {
        // Return boolean comparison
        return this.winningNumber - this.playersGuess > 0;
    }
    // Validate and process guess
    playersGuessSubmission(num) {
        let tryNumber = Math.floor(parseInt(num));
        if (isNaN(num) || num < 1 || num > 100) {
            return "That is an invalid guess.";
        }
        this.playersGuess = tryNumber;
        return this.checkGuess();
        // Throw error if invalid number
        // Set playersGuess
        // Return checkGuess result
    }
    // Evaluate guess and return feedback message
    // Handle win condition
    // Handle duplicate guess
    // Add to pastGuesses
    // Handle max guesses
    // Return temperature feedback
    checkGuess() {
        if (this.win === false) {
            return " The game is over. You did not guess the correct number in the allotted number of"
                + " guesses.";
        }
        if (this.playersGuess === this.winningNumber) {
            this.win = true;
            this.gameOver = true;
            return "You Win!";
        }
        for (let i = 0; i < this.pastGuesses.length; i++) {
            if (this.playersGuess === this.pastGuesses[i]) {
                return "You have already guessed that number.";
            }
        }
        this.pastGuesses.push(this.playersGuess);
        if (this.pastGuesses.length === this.maxNumGuesses) {
            this.win = false;
            this.gameOver = true;
            return "You Lose. The right number was: " + this.winningNumber;
        }
        if (Math.abs(this.winningNumber - this.playersGuess) < 10) {
            return "You're burning up!";
        }
        else if (Math.abs(this.winningNumber - this.playersGuess) < 25) {
            return "You're lukewarm.";
        }
        else if (Math.abs(this.winningNumber - this.playersGuess) < 50) {
            return "You're a bit chilly.";
        }
        else {
            return "You're ice cold!";
        }
    }
    // Generate array with 3 numbers (winning + 2 random)
    provideHint() {
        // Create array and shuffle
        let hintArray = [this.winningNumber, generateWinningNumber(),
            generateWinningNumber()];
        hintArray = shuffle(hintArray);
        return hintArray;
    }
}
function newGame() {
    return new Game();
}
// DOM Setup - Implement event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Initialize game state
    // Get DOM elements
    // Set up event handlers for:
    // - Submit guess
    // - Reset game
    // - Show hint
    // Implement:
    // - Input validation
    // - Display updates
    // - Game state management
    let playing;
    const input = document.getElementById("guessInput");
    const messageContainer = document.getElementById("message-container");

    startNewGame();

    function startNewGame() {
        playing = newGame();
        document.getElementById("Submit").addEventListener("click", processSubmit);
        document.getElementById("Reset").addEventListener("click", processReset);
        document.getElementById("Hint").addEventListener("click", processHint);
        resetHistory();
    }

    function processHint(){
        if (playing.gameOver) {
            return "The game is over.";
        }
        
        messageContainer.innerHTML = "Your number is one of these: "
        + playing.provideHint();
    }

    function processReset(){
        startNewGame();
        messageContainer.innerHTML = "Game Reset!";
    }

    function processSubmit() {
        messageContainer.innerHTML = playing.playersGuessSubmission(input.value);
        updateHistory(input.value);
        input.value = "";
        if (playing.gameOver) {
            document.getElementById("Submit").removeEventListener("click", processSubmit);
        }
    }
    function updateHistory(newNum) {
        const history = document.querySelectorAll("#guesses li");
        history.item(playing.pastGuesses.length - 1).textContent = newNum;
    }
    function resetHistory(){
        const history = document.querySelectorAll("#guesses li");
        for (let i = 0; i < history.length; i++){
            history.item(i).textContent = "?";
        }
    }
});
