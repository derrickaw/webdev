var button = document.querySelector("button");
button.addEventListener('click', changeBody);

var body = document.querySelector("body");

var isPurple = false;

// function changeBody() {
//     if(isPurple) {
//         body.style.backgroundColor = "white";
//     }
//     else {
//         body.style.backgroundColor = "purple";
//     }
//     isPurple = !isPurple;
// }

function changeBody() {
    body.classList.toggle("purple");
}