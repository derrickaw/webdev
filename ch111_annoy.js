// var answer = "";

// while(answer !== "yes" && answer !== "yeah") {
//     answer = prompt("Are we there yet?");
// }

// alert("Yay, we made it!");


// Version 2
var answer = "";

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
    answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");