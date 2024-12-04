
let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("restart");
let roof = document.getElementById("winner");
let message = document.getElementById("mess");

alert("Hello my name is Nikhil. I am from Bihar and now i am in bengaluru for my eduction.This is small game project that i make for fun and for pratice.i am small web devloper also.");

let firstPlayer = Math.floor(Math.random());

let PlayerX = true;
let PlayerY = false;
let count = 0;
let win = false;


if (firstPlayer == 1) {
    PlayerX = false;
    PlayerY = true;
}

boxes.forEach((box)=>{
    box.style.color = 'black';
})

const playerCheck = () => {
    if(PlayerX && !PlayerY){
    message.innerText = "It's player X turn."
   } else {
    message.innerText = "It's player O turn."
  }
}

playerCheck();

let winningPatten = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box)=>{
    box.addEventListener("click", ()=> {
        if(PlayerX && !PlayerY){
            box.innerText = "X";
            message.innerText = "It's player O turn."
            PlayerX = false;
            PlayerY = true;
        } else {
            box.innerText = "O";
            message.innerText = "It's player X turn."
            PlayerX = true;
            PlayerY = false;
        }
        box.disabled = true;
        count+=1;
        checkWinner();
    })
});

const checkWinner = () => {
    for (patten of winningPatten) {
        let pos1 = boxes[patten[0]].innerText;
        let pos2 = boxes[patten[1]].innerText;
        let pos3 = boxes[patten[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 == pos3) {
               roof.style.display = 'flex';
               for(let i = 0; i<3; i++) {
                boxes[patten[i]].style.color = "red";
               }
               message.innerText = `Player ${pos1} is winner.`;
               win = true;
               boxes.forEach((box)=>{
                box.disabled = true;
               })
            }
            
            if (count == 9 && !win) {
               roof.style.display = 'flex';
               message.innerText = `Game is tie!`;
               boxes.disabled = true;
            }

        }
    }
}

const restart = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        playerCheck();
        win = true;
    })
}

resetBtn.addEventListener("click", () => {
    message.innerText = '';
    boxes.forEach((box)=>{
        box.style.color = 'black';
    })
    restart();
})