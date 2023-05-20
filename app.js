const loginForm= document.querySelector(".login-form");
const loginInput= loginForm.querySelector("input:first-child");
const link = document.querySelector("a");
const greeting= document.querySelector(".greeting");

// value는 input값 안에 유저가 치는 값을 말한다
function handleLink(event){
    event.preventDefault();
    alert("clicked");
    // link.classList.add("hidden");
}


function handleLink(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    const username=loginInput.value;
    greeting.innerText=`Hello ${username}`
}



loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLink);