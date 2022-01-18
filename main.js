function randomeNumberFunc() {
  const randomNumber = Math.floor(Math.random() * 5000);

  return randomNumber;
}

function guessNumber() {
  let myGuess = parseFloat(
    prompt(
      'the computer choosed a number between 0 - 5000, try to guess the number.'
    )
  );
  return myGuess;
}

const computerChoice = randomeNumberFunc();
let userCoice = guessNumber();



while (userCoice != computerChoice) {
  let lastCoice = userCoice; 
  if (userCoice < computerChoice) {
    alert("you need to choose a higher number. " + "Your last choice is: " + lastCoice);
  } else if (userCoice > computerChoice) {
    alert("you need to choose a lower number. " + "Your last choice is: " + lastCoice);
  }
  
  userCoice = guessNumber();
  
}
alert("Well done, you've got the number " + "(" + computerChoice + ")");
