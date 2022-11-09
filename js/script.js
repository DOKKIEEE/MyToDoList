let addTaskBtn = document.querySelector("#addBtn");
addTaskBtn.addEventListener("click", addTask);

function addTask() {
    let myToDoList = document.querySelector("#myToDoList").value;

    let toDoList = document.querySelector("#toDoList");

    let taskItem = document.createElement("div");
    let taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.setAttribute("disabled", "");
    taskInput.value = myToDoList;
    taskInput.defaultValue = myToDoList;

    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.classList = "editBtn";
    editBtn.addEventListener("click", editValue);

    var childNum = document.querySelector("#toDoList").childElementCount;
    let limit = 7;
    console.log(childNum);
    
    if (childNum < limit) {
        console.log("Added Successfully");
    } else {
        alert("Limit Reached");
        addTaskBtn.setAttribute("disabled", "");
    }

    function editValue() {
        taskInput.removeAttribute("disabled", "");
        editBtn.setAttribute("disabled", "");

        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        saveBtn.classList = "saveBtn";
        saveBtn.addEventListener("click", saveValue);

        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList = "delBtn";
        delBtn.addEventListener("click", delTask);

        taskItem.appendChild(saveBtn);
        taskItem.appendChild(delBtn);

        function delTask() {
            let text = "Do You Want To Delete This Task?";

            if (confirm(text) == true) {

                editBtn.removeAttribute("disabled", "");

                taskItem.remove();

                var childNumNewVal = document.querySelector("#toDoList").childElementCount;
                console.log(childNumNewVal);

                if (childNumNewVal === 7) {
                    addTaskBtn.removeAttribute("disabled", "");
                }

                text = "save successfully";
            } else {
                text = "Cancelled";
                
                editBtn.removeAttribute("disabled", "");
  
                taskInput.setAttribute("disabled", ""); 
                delBtn.remove();
                saveBtn.remove();
            }
            alert(text);
        }
        
        function saveValue() {
            let text = "Confirm Changes";

            if (confirm(text) == true) {

                editBtn.removeAttribute("disabled", "");

                let newValue = taskInput.value;

                taskInput.defaultValue = newValue;
                
                taskInput.setAttribute("disabled", "");

                taskItem.removeChild(saveBtn);

                text = "save successfully";

                saveBtn.remove();
                delBtn.remove();
            } else {
                text = "Cancelled";

                 editBtn.removeAttribute("disabled", "");

                 let newValue = taskInput.value;
                 taskInput.setAttribute("disabled", "");

                 saveBtn.remove();
                 delBtn.remove();

                 taskInput.value = taskInput.defaultValue;
            }
            alert(text);
        }

    }
    toDoList.appendChild(taskItem);
    taskItem.appendChild(taskInput);
    taskItem.appendChild(editBtn);
}