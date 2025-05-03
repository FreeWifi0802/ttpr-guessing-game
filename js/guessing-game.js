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
  return Math.floor(Math.random() * 100) + 1
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

  playersGuess;
  pastGuesses;
  winningNumber;
  maxNumGuesses = 5;

  constructor() {
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

    if (isNaN(num) || num < 1 || num > 100){
      throw "That is an invalid guess.";
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
    if (this.playersGuess === this.winningNumber){
      return "You Win!";
    }

    for (let i = 0; i < this.pastGuesses.length; i++){
      if (this.playersGuess === this.pastGuesses[i]) {
        return "You have already guessed that number.";
      }
    }

    this.pastGuesses.push(this.playersGuess);

    if (this.pastGuesses.length === this.maxNumGuesses) {
      return "You Lose.";
    }

    if (Math.abs(this.winningNumber - this.playersGuess) < 10){
      return "You're burning up!";
    } else if (Math.abs(this.winningNumber - this.playersGuess) < 25){
      return "You're lukewarm.";
    } else if (Math.abs(this.winningNumber - this.playersGuess) < 50) {
      return "You're a bit chilly.";
    } else {
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
});
