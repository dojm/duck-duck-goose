let userInput;
const players = ["lisa", "bart", "maggie"];
let result;

function getGoose(userInput) {
  userInput -= 1;

  if (userInput > players.length || userInput % players.length === 0) {
    result = userInput % players.length;
    result = Math.floor(result);

  } else {
    result = userInput;
  }

  return players[result];
}

function showGoose(userInput) {
  if (userInput === 0) {
    showError();
  } else {
    let goosePlayer = getGoose(userInput);
    console.log(goosePlayer);
  }
}

function showError() {
  console.log('No pats! Please enter a number greater than 0');
}