let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX , playerO

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        console.log("box was clicked");
       if(turnO) {  //playerO
         box.innerText = "O";
        turnO = false;
       } else {  //playerX
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;

       checkwinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (WINNER) => {
    msg.innerText = `Congratulations, winner is ${WINNER}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
 
const checkwinner = () => {
    for(let pattern of winpatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
          let pos3Val = boxes [pattern[2]].innerText;

        if (pos1Val !="" && pos2Val !="" && pos3Val !="") {
            if(pos1Val === pos2Val && pos2Val === pos3Val ) {
                console.log("WINNER",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);