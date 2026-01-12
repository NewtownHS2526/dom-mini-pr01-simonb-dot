console.log("Script Running");

// Helper function to change horse position
const changePosition = (horse, position) => {
  if (position <= 5) {
    horse.style.setProperty('grid-column', position);
  }
};

// Initialize positions for each horse
let blue_position = 1;
let pink_position = 1;
let brown_position = 1;

// Query Selectors for buttons and horses
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");
const pinkButton = document.querySelector("#pink-button");
const pinkHorse = document.querySelector("#pink-horse");
const brownButton = document.querySelector("#brown-button");
const brownHorse = document.querySelector("#brown-horse");

// Finish line position (you can change this if needed)
const finishLine = 5;

// OnClick Functions for each horse
const advanceBlue = () => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  checkWinner(blue_position, "Blue");
};

const advancePink = () => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  checkWinner(pink_position, "Pink");
};

const advanceBrown = () => {
  brown_position += 1;
  changePosition(brownHorse, brown_position);
  checkWinner(brown_position, "Brown");
};

// Check for a winner
const checkWinner = (position, color) => {
  if (position >= finishLine) {
    console.log(`${color} horse wins!`);
    alert(`${color} horse wins!`);
    resetPositions(); // Reset positions after a win
  }
};

// Reset all horse positions
const resetPositions = () => {
  blue_position = 1;
  pink_position = 1;
  brown_position = 1;
  changePosition(blueHorse, blue_position);
  changePosition(pinkHorse, pink_position);
  changePosition(brownHorse, brown_position);
};

// Event Listeners for button clicks
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);
