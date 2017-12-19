var correctAnswer = false;
var guess=prompt("I'm thinking of a number between 1 & 6. What is it?")
var randomNumber=Math.floor(Math.random()*6)+1;
if (parseInt(guess)===randomNumber) {
  correctAnswer = true;
} else if (parseInt(guess)>randomNumber) {
  var guessLess=prompt("Guess lower.")
  if (parseInt(guessLess) === randomNumber)
  correctAnswer = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore=prompt("Guess higher.")
  if (parseInt(guessMore) === randomNumber)
  correctAnswer = true;
} if (correctAnswer = true) {
  alert("That's correct!")
} else {
  alert("No sorry. Try again.")
}
