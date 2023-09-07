// UI to add new tasks
export function newTaskForm(container) {

    // DOM elements creation
    let newTaskContainer = document.createElement('form')
    newTaskContainer.id = 'new-task-container'

    // DOM elements and their attributes 
    const formFields = [
    {field: 'label', class: 'form-item', for: 'new-task-title', textContent: 'Title'}, 
    {field: 'input', type: 'text', id: 'new-task-title', class: 'form-item', textContent: '', required: ''},  
    {field: 'label', class: 'form-item', for: 'new-task-description', textContent: 'Description'}, 
    {field: 'textarea', id: 'new-task-description', class: 'form-item', textContent: '', required: ''}, 
    {field: 'fieldset', id: 'priority-container', class: 'form-item', textContent: ''},
    {field: 'legend', class: 'fieldset form-item', textContent: 'Choose priority'},
    {field: 'label', class: 'fieldset form-item', for: 'low-priority', textContent: 'Low'}, 
    {field: 'input', type: 'radio', id: 'low-priority', class: 'fieldset form-item', name: 'priority', textContent: '', required: ''},
    {field: 'label', class: 'fieldset form-item', for: 'medium-priority', textContent: 'Medium'}, 
    {field: 'input', type: 'radio', id: 'medium-priority', class: 'fieldset form-item', name: 'priority', textContent: ''},
    {field: 'label', class: 'fieldset form-item', for: 'high-priority', textContent: 'High'}, 
    {field: 'input', type: 'radio', id: 'high-priority', class: 'fieldset form-item', name: 'priority', textContent: ''},
    {field: 'label', class: 'form-item', for: 'new-task-date', textContent: 'Due date'}, 
    {field: 'input', type: 'date', id: 'new-task-date', class: 'form-item', textContent: '', required: ''},
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
                return document.querySelector('#button-container').append(newField)
            }

        newTaskContainer.append(newField)
        container.append(newTaskContainer)
    });
}