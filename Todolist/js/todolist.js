const result = document.querySelector("#count");

const todoForm = document.querySelector("#todo-form");
todoForm.addEventListener("submit", todoAdd);

function todoAdd(e) {
    e.preventDefault();
    const todoValue = todoForm.firstElementChild.value;
    const li = document.createElement("li");
    const check = document.createElement("input");
    check.type = "checkbox";
    const text = document.createTextNode(todoValue);
    const button = document.createElement("button");
    button.innerHTML = "X";

    const time = document.createElement("span");

    time.innerHTML = getClock();

    li.appendChild(check);
    li.appendChild(text);
    li.appendChild(time); 
    li.appendChild(button);

    document.querySelector("#todolist").appendChild(li);
    checkToDo();

    todoForm.firstElementChild.value ="";

    check.addEventListener("click", todoCheck);
    button.addEventListener("click", todoDelete);

}

function todoCheck(e) {
    const check = e.target;
    const li = check.parentNode;
    if(check.checked) {
        li.style.color = "lightgray";
        li.style.textDecoration = "line-through";


    }else {
        check.parentNode.style.color = "";
        li.style.textDecoration = "";
    }
    checkToDo();

}

  function todoDelete (e) {
    const button = e.target;
    const li = button.parentNode;
    li.remove();
    checkToDo();

}

function checkToDo() {
    const liLength = document.querySelectorAll("li");
    const checked = document.querySelectorAll("li input:checked");

    document.querySelector("#count").innerHTML = `✏️ 전체 할일 : ${liLength.length} / 완료한 할일 : ${checked.length}✔️`;
}

