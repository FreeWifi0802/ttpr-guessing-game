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
  constructor() {
    // Initialize properties:
    // - playersGuess (current guess)
    // - pastGuesses (array of previous guesses)
    // - winningNumber (generated number)
  }

  // Return absolute difference between guess and winning number
  difference() {
    // Calculate and return difference
  }

  // Return true if guess is lower than winning number
  isLower() {
    // Return boolean comparison
  }

  // Validate and process guess
  playersGuessSubmission(num) {
    // Throw error if invalid number
    // Set playersGuess
    // Return checkGuess result
  }

  // Evaluate guess and return feedback message
  checkGuess() {
    // Handle win condition
    // Handle duplicate guess
    // Add to pastGuesses
    // Handle max guesses
    // Return temperature feedback
  }

  // Generate array with 3 numbers (winning + 2 random)
  provideHint() {
    // Create array and shuffle
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
