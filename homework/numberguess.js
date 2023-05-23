const gameForm = document.querySelector(".game-form");
const  setBoundary = document.querySelector(".bound");
const  setGuessNumber = document.querySelector(".guess");
const result = document.querySelector(".result");
const answer = document.querySelector(".result h4:first-child");
const winLose = document.querySelector(".result h4:last-child");

function gameStart(event){
    event.preventDefault();
    const boundaryNum = parseInt(setBoundary.value);
    const randomNum =Math.floor(Math.random()*boundaryNum);
    const  guessNum= parseInt(setGuessNumber.value);
    result.classList.remove("hidden");
    answer.innerText=`You chose: ${guessNum}, the machine chose: ${randomNum}.`
    
    if (guessNum===randomNum){
        winLose.innerText="You won!"
    }else{
        winLose.innerText="You lost!"
    }
}

gameForm.addEventListener("submit", gameStart);
