import { newTaskForm } from "./new-task-form"
import { todoList, todoToday, todoWeek } from "./to-dos"

export function createTask(element) {
    element.addEventListener('click', e => {
        newTaskForm(document.querySelector('body'))
    })
}