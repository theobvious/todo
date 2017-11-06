function todoModule(containerElement) {
    function addTodoItem(text, priority) {
        var newDiv = document.createElement("div");
        newDiv.className = "col-xs-3";
        newDiv.innerHTML = text + ", priority: " + priority;
        var space = document.createElement("p");
        var doButton = document.createElement("button");
        doButton.className = "done";
        doButton.innerHTML = "Mark as done";
        newDiv.appendChild(space);
        newDiv.appendChild(doButton);
        var todoList = document.getElementById("todoList");
        todoList.appendChild(newDiv);

    }


    function markTodoItemAsDone() {
        var buttons = document.getElementsByClassName("done");
        var i;
        for (i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function () {
                var div = this.parentElement;
                div.innerHTML = "Done!"
            }
        }
    }

    function addViaForm() {
        var newDiv = document.createElement("div");
        newDiv.className = "col-xs-3";
        var name = document.getElementById("name").value;
        var priority = document.getElementById("priority").value;
        newDiv.innerHTML = name + ", priority: " + priority;
        var space = document.createElement("p");
        var doButton = document.createElement("button");
        doButton.className = "done";
        doButton.innerHTML = "Mark as done";
        newDiv.appendChild(space);
        newDiv.appendChild(doButton);
        var todoList = document.getElementById("todoList");
        todoList.appendChild(newDiv);
    }

    var button = document.getElementById("addBtn");
    button.addEventListener("click", addViaForm);

    return {
        addTodoItem: addTodoItem,
        markTodoItemAsDone: markTodoItemAsDone
    }

}

var t = todoModule("todoList");
t.addTodoItem("Shopping", 1);
t.addTodoItem("Drink", 2);
t.markTodoItemAsDone();
