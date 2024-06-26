let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector('#reset');
let msgContainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector('#newgame');
let message= document.querySelector("#msg");
let modeBtn = document.querySelector("#mode");
let currMode = "light";   
modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        currMode = "dark";
        document.getElementById("mode").style.backgroundColor = "white";
    }
        else{
            document.body.style.backgroundColor = "cadetblue";
            document.body.style.color = "black";
            currMode = "light";
        document.getElementById("mode").style.backgroundColor = "black";
        document.getElementById("mode").style.float = "right";
        }
        console.log(currMode);
})
let turnO = true; //playerX,playerO

const winPatterns = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7],
    [2,5,8], 
    [0,4,8], 
    [2,4,6] 
];
const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
     if(turnO){
        box.innerHTML="O"
        turnO = false;
     }
     else{
        box.innerHTML="X";
        turnO = true;
     }
     box.disabled =true;
     checkWinner();
    });
});
const enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}
const disabledBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = ($player) => {
    msg.innerText = 'congratulations, Winner is ' + $player;    
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val=boxes[pattern[0]].innerHTML;
        let pos2Val=boxes[pattern[1]].innerHTML;
        let pos3Val=boxes[pattern[2]].innerHTML;
        if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
             if(pos1Val=== pos2Val && pos2Val===pos3Val ){
             console.log("winner",pos1Val);
            showWinner(pos1Val);
             }
            
        }
        
     
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);