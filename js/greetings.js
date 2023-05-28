const loginForm=document.querySelector(".login-form");
const loginText=document.querySelector(".login-form input:first-child");
const greeting=document.querySelector(".greeting");
// const anotherAccount=document.querySelector(".another");

function onLoginSubmit(event){
    event.preventDefault();
    const username=loginText.value;
    localStorage.setItem("username", username);
    loginForm.classList.add("hidden");
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.classList.remove("hidden");
    greeting.innerText=`${username}님 오늘하루도 화이팅하세요`;
    // anotherAccount.classList.remove("hidden");
}

const savedUsername =  localStorage.getItem("username")

if (localStorage.getItem("username")===null){
    loginForm.classList.remove("hidden");
}else{
    // localStorage.removeItem("username");
    paintGreeting(savedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);
// anotherAccount.addEventListener("click", anotherLogin);

// function anotherLogin(event){
//     event.preventDefault();
//     greeting.classList.add("hidden");
//     loginForm.classList.remove("hidden");
//     // anotherAccount.classList.add("hidden");
// }