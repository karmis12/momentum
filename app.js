const h1= document.querySelector(".hello h1");

function handleClick(){
    const classClicked="clicked";
    if (h1.classList.contains(classClicked)){
        h1.classList.remove(classClicked);
    }else{
        h1.classList.add(classClicked);
    }
}

h1.addEventListener("click",handleClick);