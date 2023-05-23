const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

function deleteToDo(event){
    const liRemove = event.target.parentElement;
    liRemove.remove();
    // console.log(event);를 통해서 console창을 보면서 뭘로 수정할지 알 수 있다/
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo;
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);
    // console.log(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    paintToDo(newToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);