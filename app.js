const hello= document.querySelector(".hello h1");

function clickChecker(){
    hello.style.color="blue";
}

hello.addEventListener("click",clickChecker);