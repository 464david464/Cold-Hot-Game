function randomeNumberFunc() {
  const randomNumber = Math.floor(Math.random() * 5000);

  return randomNumber;
}

function guessNumber() {
  let myGuess = parseFloat(
    prompt(
      'the computer choosed a number between 0 - 5000, try to guess the number .' + computerChoice
    )
  );
  return myGuess;
}

const computerChoice = randomeNumberFunc();
let userCoice = guessNumber();
let lastCoice = '';


while (userCoice != computerChoice) {
    
    
  if (userCoice < computerChoice) {
    alert("you need to choose a higher number. " + "the last choose " + lastCoice);
  } else if (userCoice > computerChoice) {
    alert("you need to choose a lower number. " + "the last choose " + lastCoice);
  }
  userCoice = guessNumber();
  lastCoice = userCoice;
}
alert("Well done, you've got the number " + "(" + computerChoice + ")");
