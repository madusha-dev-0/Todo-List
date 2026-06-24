const addButton = document.getElementById("add-button");
const inputTask = document.getElementById("input-task");
const taskContainer = document.getElementById("task-container");


/* ---------------------add task------------------------ */

addButton.addEventListener("click", function (event) {

    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "check");

    let taskDesc = document.createElement("p");
    taskDesc.innerHTML = inputTask.value;

    let deleteIcon = document.createElement("button");
    deleteIcon.setAttribute("id", "delete-icon");



    let divContainer = document.createElement("div");
    divContainer.setAttribute("id", "div-container");


    divContainer.appendChild(checkBox);
    divContainer.appendChild(taskDesc);
    divContainer.appendChild(deleteIcon);

    taskContainer.appendChild(divContainer).innerHTML;

    checkBox.addEventListener("change",function(event){
        if(checkBox.checked){
            taskDesc.style.textDecoration = "line-through";
            taskDesc.style.textDecorationColor = "red";
            taskDesc.style.textDecorationThickness = "2px"
            taskDesc.style.textDecorationStyle = "double";
            
        }
    })



    deleteIcon.addEventListener("click", function (event) {
        taskContainer.removeChild(divContainer);
    })


})

