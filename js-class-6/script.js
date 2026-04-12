const textBox = document.getElementById("text-box");
const redBtn = document.getElementById("redBtn");
const yellowBtn = document.getElementById("yellowBtn");
const blueBtn = document.getElementById("blueBtn");


function content(btnColor) {
    textBox.innerText = `${btnColor} Button is clicked !!!`;
    textBox.style.backgroundColor = `${btnColor}`;
}
redBtn.addEventListener("click", function () {
    content("red")
});

yellowBtn.addEventListener("click", function () {
    content("yellow")
});

blueBtn.addEventListener("click", function () {
    content("blue")
});