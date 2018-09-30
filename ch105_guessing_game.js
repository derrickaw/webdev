// Create secret number 
var secretNumber = 11;


// Ask user for guess
var guess = Number(prompt("Guess a number"));


// Check guess
if(guess === secretNumber) {
	alert("You got it right!!!");
}
else if(guess < secretNumber) {
	alert("Your guess is too low!!");
}
else {
	alert("Your guess is too high!!");
}