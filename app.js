const loginForm= document.querySelector(".login-form");
const loginInput= loginForm.querySelector("input:first-child");
const link = document.querySelector("a");

// value는 input값 안에 유저가 치는 값을 말한다

function onLoginSubmit(event){
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLink(event){
    event.preventDefault();
    alert("clicked");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLink);