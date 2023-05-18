const superEventHandler= document.querySelector(".hello h1");
// console.dir(superEventHandler);

function handleMouseOn() {
    superEventHandler.innerText = "The mouse is here!";
    superEventHandler.style.color = "#1abc9c";
  }
  function handleMouseLeave() {
    superEventHandler.innerText = "The mouse is gone!";
    superEventHandler.style.color = "#3498db";
  }
  function handleWindowResize() {
    superEventHandler.innerText = "You just resized!";
    superEventHandler.style.color = "#9b59b6";
  }
  function handleMouseRightClick() {
    superEventHandler.innerText = "That was a right click!";
    superEventHandler.style.color = "#e74c3c";
  }
  function handleMouseClick() {
    const currentColor = superEventHandler.style.color
    let newColor; 
    if (currentColor ==="blue"){
        newColor="pink";
    }else{
        newColor= "blue";
    }
    superEventHandler.style.color=newColor;
    superEventHandler.innerText = "The title is clicked!";
  }
  superEventHandler.addEventListener("mouseenter", handleMouseOn);
  superEventHandler.addEventListener("mouseleave", handleMouseLeave);
  window.addEventListener("resize", handleWindowResize);
  window.addEventListener("auxclick", handleMouseRightClick);
  superEventHandler.addEventListener("click", handleMouseClick);
  