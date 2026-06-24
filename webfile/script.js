const addButton = document.getElementById("add-button");
const inputTask = document.getElementById("input-task");
const taskContainer = document.getElementById("task-container");


/* ---------------------add task------------------------ */

addButton.addEventListener("click", function(event){

    let taskAdd = document.createElement("input");
    taskAdd.setAttribute("type" ,"checkbox" );
    taskAdd.setAttribute("class", "check");

    let taskDesc = document.createElement("p");
    taskDesc.innerHTML = inputTask.value;

    let divContainer = document.createElement("div");

    divContainer.setAttribute("id","divcontainer")

    divContainer.appendChild(taskAdd);
    divContainer.appendChild(taskDesc);

    taskContainer.appendChild(divContainer).innerHTML;



})