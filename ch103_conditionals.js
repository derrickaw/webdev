var age = Number(prompt("What is your age?"));

if(age < 0) {
	console.log("!!!Error, age is negative");
}
if(age === 21) {
	console.log("Happy 21st birthday!!");
}
if(age % 2 === 1) {
	console.log("Your age is odd!");
}
if(age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square!");
}