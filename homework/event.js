// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = document.querySelector("h2");

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
superEventHandler.addEventListener("mouseenter", handleMouseOn);
superEventHandler.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("auxclick", handleMouseRightClick);
