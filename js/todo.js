const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList = document.querySelector(".todo-list");

let toDos=[];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}
//값을 string으로 저장하고 싶으면 JSON.stringify(~)으로 저장가능

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo =>toDo.id !==parseInt(li.id));
    saveToDos();
    // console.log(event);를 통해서 console창을 보면서 뭘로 수정할지 알 수 있다/
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newToDoObj.id;
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDoObj.text;
    button.addEventListener("click", deleteToDo);
    toDoList.appendChild(li);
    // console.log(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text:newToDo,
        id:Date.now()
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);


function sayHello(item){
    console.log(item);
}

const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}