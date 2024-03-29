import { currentList } from './homeUI'
import { addTodo, renderCurrentList, todoList, todoToday, todoWeek, updateList } from './to-dos'

// UI to add new tasks
export function newTaskForm(container) {

    // DOM elements creation
    let overlay = document.createElement('div')
    let newTaskContainer = document.createElement('form')
    overlay.id = 'form-overlay'
    newTaskContainer.id = 'new-task-container'
    newTaskContainer.addEventListener('submit', e => {
        e.preventDefault()
        addTodo(document.getElementById('new-task-title').value, document.getElementById('new-task-description').value, checkPriority(), document.getElementById('new-task-date').value)
        e.target.parentElement.remove()
        updateList()
        let list
        if (currentList == 'today') {
            list = todoToday
            return renderCurrentList(list, document.getElementById('task-list-container'))
        }
        else if (currentList == 'week') {
            list = todoWeek
            return renderCurrentList(list, document.getElementById('task-list-container'))
        }
        else if (currentList == 'home'){
            list = todoList
            return renderCurrentList(list, document.getElementById('task-list-container'))
        }
        renderCurrentList(currentList, document.getElementById('task-list-container'))
    })

    // DOM elements and their attributes 
    const formFields = [
    {field: 'label', class: 'form-item', for: 'new-task-title', textContent: 'Title'}, 
    {field: 'input', type: 'text', id: 'new-task-title', class: 'form-item task-data', textContent: '', required: '', maxlength: '30'},  
    {field: 'label', class: 'form-item', for: 'new-task-description', textContent: 'Description'}, 
    {field: 'textarea', id: 'new-task-description', class: 'form-item task-data', textContent: '', maxlength: '50'}, 
    {field: 'fieldset', id: 'priority-container', class: 'form-item', textContent: ''},
    {field: 'legend', class: 'fieldset form-item', textContent: 'Choose priority'},
    {field: 'label', class: 'fieldset form-item', for: 'low-priority', textContent: 'Low'}, 
    {field: 'input', type: 'radio', id: 'low-priority', class: 'fieldset form-item task-data', name: 'priority', textContent: '', required: ''},
    {field: 'label', class: 'fieldset form-item', for: 'medium-priority', textContent: 'Medium'}, 
    {field: 'input', type: 'radio', id: 'medium-priority', class: 'fieldset form-item task-data', name: 'priority', textContent: ''},
    {field: 'label', class: 'fieldset form-item', for: 'high-priority', textContent: 'High'}, 
    {field: 'input', type: 'radio', id: 'high-priority', class: 'fieldset form-item task-data', name: 'priority', textContent: ''},
    {field: 'label', class: 'form-item', for: 'new-task-date', textContent: 'Due date'}, 
    {field: 'input', type: 'date', id: 'new-task-date', class: 'form-item task-data', textContent: '', required: ''},
    {field: 'div', id: 'button-container', class: 'form-item', textContent: ''},
    {field: 'button', id: 'add-button', type: 'submit', class: 'button form-item', textContent: 'Add'},
    {field: 'button', id: 'cancel-button', type: 'button', class: 'button form-item', textContent: 'Cancel'},]

    // Creation of DOM elements
    formFields.forEach(element => {
        let newField = document.createElement(`${element.field}`)
            for (const property in element) {
                newField.setAttribute(`${property}`, `${element[property]}`)
                newField.textContent = `${element.textContent}`
                newField.removeAttribute('field', 'textContent')
            }

            if (newField.getAttribute('class').includes('fieldset')) {
                return document.querySelector('#priority-container').append(newField)
            }

            if (newField.getAttribute('class').includes('button')) {
                buttonAction(newField)
                return document.querySelector('#button-container').append(newField)
            }

        newTaskContainer.append(newField)
        overlay.append(newTaskContainer)
        container.append(overlay)
    });
}

function buttonAction(button) {
    if (button.getAttribute('id') === 'cancel-button') {
        button.addEventListener('click', e => e.target.parentElement.parentElement.parentElement.remove())
    }
}

function checkPriority() {
    let radios = document.getElementsByTagName('input');
    let value;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            return value = radios[i].id.slice(0, -9);
        }}
}