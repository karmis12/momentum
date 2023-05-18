const h1= document.querySelector(".hello h1");

function handleClick(){
    // const classClicked="clicked";
    // if (h1.classList.contains(classClicked)){
    //     h1.classList.remove(classClicked);
    // }else{
    //     h1.classList.add(classClicked);
    // }
    // 위의 식이 아래의 식 하나로 대체됨
    h1.classList.toggle("clicked");
}

h1.addEventListener("click",handleClick);