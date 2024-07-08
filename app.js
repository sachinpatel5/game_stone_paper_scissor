let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const reset= document.querySelector("#reset");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");



const genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let indx=Math.floor(Math.random()*3);
    return options[indx];
}

const drawGame=()=>{
    console.log("Game was draw.Play Again!");
    msg.innerText="Game was draw.Play Again!";
    msg.style.backgroundColor="#081b31";
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose!");
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("user choice = ", userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice = ", compChoice);
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin= compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin= compChoice==="scissor"?false:true;
        }else{
            userWin= compChoice==="rock"?false:true;
    }
    showWinner(userWin, userChoice, compChoice);
}

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
    console.log("choice was clicked "+userChoice);
    playGame(userChoice);
  });
});

reset.addEventListener("click",()=>{
    compScore=0;
    compScorePara.innerText=compScore;
    userScore=0;
    userScorePara.innerText=userScore;
    msg.innerText="Play your move!";
    msg.style.backgroundColor="#081b31";
});
