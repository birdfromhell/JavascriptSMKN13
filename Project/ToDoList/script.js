console.log("Script loaded");
const todos = [];
const RENDER_EVENT = "render-todo";

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo();
})

function addTodo() {
    let textTodo = document.getElementById('title').value;
    let timestamp = document.getElementById('date').value;

    let generateID = generateId();
    let todoObject = generateTodoObject(generateID, textTodo, timestamp, false);
    todos.push(todoObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
}

function generateId() {
    return +new Date();
}

function generateTodoObject(id, task, timestamp, isCompleted) {
    return {
        id,
        task,
        timestamp,
        isCompleted
    }
}

function makeTodo(todoObject) {
    let textTitle = document.createElement('h2')
    textTitle.innerText = todoObject.task

    let textTimestamp = document.createElement('p')
    textTimestamp.innerText = todoObject.timestamp

    let textContainer = document.createElement('div')
    textContainer.classList.add('inner')
    textContainer.append(textTitle, textTimestamp)

    let container = document.createElement('div')
    container.classList.add('item', 'shadow')
    container.append(textContainer)
    container.setAttribute('id', `todo-${todoObject.id}`)

    if(todoObject.isCompleted) {
        let undoButton = document.createElement('button')
        undoButton.classList.add('undo-button')

        undoButton.addEventListener('click', function () {
        undoTaskFromCompleted(todoObject.id)
        })

        let trashButton = document.createElement('button')
        trashButton.classList.add('trash-button')

        trashButton.addEventListener('click', function () {
        removeTaskFromCompleted(todoObject.id)
        })

        container.append(undoButton, trashButton)
    } else {
        let checkButton = document.createElement('button')
        checkButton.classList.add('check-button')

        checkButton.addEventListener('click', function () {
        addTaskToCompleted(todoObject.id)
        })

        container.append(checkButton)
    }

    return container
}

function addTaskToCompleted(todoId) {
    let todoTarget = findTodo(todoId)

    if(todoTarget == null) return

    todoTarget.isCompleted = true
    document.dispatchEvent(new Event(RENDER_EVENT))
}

function findTodo(todoId) {
    for (let todoItem of todos) {
        if (todoItem.id === todoId) {
            return todoItem
        }
    }
    return null
}

function findTodoIndex(todoId) {
    for (let index in todos) {
        if (todos[index].id === todoId) {
            return index
        }
    }
    return -1
}

function removeTaskFromCompleted(todoId) {
    let todoTarget = findTodoIndex(todoId)

    if(todoTarget === -1) return

    todos.splice(todoTarget, 1)
    document.dispatchEvent(new Event(RENDER_EVENT))
}

function undoTaskFromCompleted(todoId) {
    let todoTarget = findTodoIndex(todoId)

    if(todoTarget === -1) return

    todos[todoTarget].isCompleted = false
    document.dispatchEvent(new Event(RENDER_EVENT))
}

document.addEventListener(RENDER_EVENT, function () {
    console.log(todos)
    let uncompletedTodoList = document.getElementById('todos')
    uncompletedTodoList.innerHTML = ''

    let completedTodoList = document.getElementById('completed-todos')
    completedTodoList.innerHTML = ''

    for (let todoItem of todos) {
        let todoElement = makeTodo(todoItem)
        if (!todoItem.isCompleted) {
            uncompletedTodoList.append(todoElement)
        } else {
            completedTodoList.append(todoElement)
        }
    }
})