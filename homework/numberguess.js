const setBoundary = document.querySelector(".game-form input:first-child");
const insertValue = document.querySelector(".game-form input:nth-child(2)");
const gameForm = document.querySelector(".game-form");

function playGame(event){
    event.preventDefault();
    const boundary=setBoundary.value;
    const value=insertValue.value;
    console.log(boundary);
    console.log(value);
}

gameForm.addEventListener("submit", playGame)

// const loginText=document.querySelector(".login-form input:first-child");
//     const username=loginText.value;