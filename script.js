let boxes=document.querySelectorAll(".box");
let restart=document.querySelector(".restart");
let newgame=document.querySelector(".newGame");
let msgcontainer=document.querySelector(".msgcontainer");
let message=document.querySelector("#winner");

let turnO=true;//player o turn
const winningPattern=[

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]

];


boxes.forEach(box => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turnO===true){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
});

const checkWinner = () => {
    for (let pattern of winningPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner", pos1);
                showwinner(pos1);
            }
        }

    }
}


const showwinner=(winner)=>{
    message.innerText=`WINNER IS ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}


const disableboxes=()=>{
    for (box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const restartgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}


newgame.addEventListener("click", restartgame);
restart.addEventListener("click", restartgame);