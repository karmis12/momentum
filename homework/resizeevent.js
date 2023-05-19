const hello=document.querySelector(".hello")

hello.style.color="white";
document.body.style.backgroundColor="yellow";
function handleResize(){
    if (window.innerWidth>=1200){
        document.body.style.backgroundColor="yellow";
    }else if(window.innerWidth<1200 && window.innerWidth>700){
        document.body.style.backgroundColor="purple";
    }else{
        document.body.style.backgroundColor="blue"
    }
}

window.addEventListener("resize", handleResize);