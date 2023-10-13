import { currentList } from "./homeUI"
import { addIcon } from "./icons"
export let todoList = []
export let todoToday = []
export let todoWeek = []
todayTaks()
weekTasks()

export function updateList() {
    todayTaks()
    weekTasks()
}

export function todayTaks() {
    todoToday = todoList.filter((element) => {
        let dateDay = element.date.split('/')[0]
        let dateMonth = element.date.split('/')[1] - 1
        let dateYear = element.date.split('/')[2]
        let today = new Date()
        if (new Date(dateYear,dateMonth, dateDay) == new Date(today.getFullYear(), today.getMonth(), today.getDate()).toString()) {
            return element
        }
        })
}

export function weekTasks(list) {
    todoWeek = todoList.filter((element) => {
        let dateDay = element.date.split('/')[0]
        let dateMonth = element.date.split('/')[1] - 1
        let dateYear = element.date.split('/')[2]
        let today = new Date()
        if (new Date(dateYear, dateMonth, dateDay) < new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7) && new Date(dateYear, dateMonth, dateDay) >= new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
            return element
        }
        })
}

export function addTodo(title, description, priority, date) {
    let dateDay = date.split('-')[2]
    let dateMonth = date.split('-')[1]
    let dateYear = date.split('-')[0]
    todoList.push({status: 'incomplete', title: title, description: description, priority: priority, date: `${dateDay}/${dateMonth}/${dateYear}`})
}

export function renderCurrentList(listName, container) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    listName.forEach(element => {
        let todo = document.createElement('div')
        let todoStatus = document.createElement('input')
        let title = document.createElement('div')
        let description = document.createElement('div')
        let dueDate = document.createElement('div')
        todo.setAttribute('class', 'todo')
        dueDate.setAttribute('class', 'todo-date')
        todoStatus.id = 'todo-status'
        todoStatus.setAttribute('type', 'checkbox')
        if (element.status === 'complete') {
            todoStatus.checked = true
            todo.style.textDecoration = 'line-through'
            todo.style.opacity = '0.5'
        }
        todoStatus.addEventListener('change', function() {
            if (this.checked) {
                todo.style.textDecoration = 'line-through'
                todo.style.opacity = '0.5'
                listName[(Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode))].status = 'complete'
                todoStatus.checked = true
            }
            else {
                todo.style.textDecoration = 'none'
                todo.style.opacity = '1'
                listName[(Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode))].status = 'incomplete'
            }
        })
        dueDate.textContent = element.date
        title.textContent = `${element.title}`
        title.style.fontWeight = '900'
        if (element.description !== '') {
            description.textContent = `- ${element.description}`
        }
        todo.append(todoStatus, title, description, dueDate)
        addIcon(todo, 'delete', 'beforeend')
        todo.lastChild.addEventListener('click', e => {
            if(confirm('Are you sure you want to delete this?')) {
                todoList.splice(todoList.map(e => e.title).indexOf(title.textContent), 1)
                updateList()
                todo.remove()
            }
        })
        if (element.priority === 'high') {
            todo.style.border = 'red 2px solid'
        }
        else if (element.priority === 'medium') {
            todo.style.border = 'orange 2px solid'
        }
        else {
            todo.style.border = 'green 2px solid'
        }
        container.appendChild(todo)
    })
    updateList()
}