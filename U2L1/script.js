const button = document.querySelector("button");


button.addEventListener("click", updateName);


function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}


const button2 = document.querySelector("#btn2");
num = 0;
button2.addEventListener("click", addNotation);


function addNotation(){
    var add = prompt("Add the amount you want to increment");
    num = num + parseInt(add);
    let text = "Increment: " + num;
    button2.textContent = text;
}

const text = document.querySelector("#para");
const display = document.querySelector("#display");

text.addEventListener("click",changeContent);
function changeContent(){
    const content = prompt("change the content of the paragraph");
    text.textContent = content;
    display.textContent(content);
}

