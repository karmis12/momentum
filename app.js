const loginForm= document.querySelector(".login-form");
const loginInput= loginForm.querySelector("input:first-child");
const link = document.querySelector("a");
const greeting= document.querySelector(".greeting");

// value는 input값 안에 유저가 치는 값을 말한다

function onLoginSubmit(event){
    event.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username);
    // greeting.innerText="안녕하세요 "+username+"님";
    greeting.innerText=`안녕하세요 ${username}님`;
    greeting.classList.remove("hidden");
}

function handleLink(event){
    event.preventDefault();
    alert("clicked");
    // link.classList.add("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLink);