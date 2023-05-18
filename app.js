const hello= document.querySelector(".hello h1");
console.dir(hello);

function handleClick(){
    hello.style.color="blue";
}

function handleEnter(){
    hello.innerText="Mouse is here!!";
}

function handleLeave(){
    hello.innerText="Mouse is gone!!";
}

hello.addEventListener("click", handleClick);
hello.addEventListener("mouseenter",handleEnter);
hello.addEventListener("mouseleave",handleLeave);