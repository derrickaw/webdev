var button = document.querySelector("button");
button.addEventListener('click', changeBody);

var body = document.querySelector("body");

var body_color = "white";

function changeBody() {
    if(body_color === "white") {
        body.style.backgroundColor = "purple";
        body_color = "purple";
    }
    else {
        body.style.backgroundColor = "white";
        body_color = "white";
    }
}