import { checkIcon, addIcon} from "./icons";
import { createTask } from "./user-interactions";
import { todoList, todoToday, todoWeek, renderCurrentList } from "./to-dos";

// Function to create the basic UI
export let currentList
export function createHomeUI(container) {
    currentList = todoList
    let header = document.createElement('div')
    let title =  document.createElement('div')
    let mainContent = document.createElement('div')
    let navbarContainer = document.createElement('div')
    let listContainer = document.createElement('div')
    let taskListContainer = document.createElement('div')
    let listHeader = document.createElement('h2')

    const navbarElements = [
    {textContent: 'Home', class: 'navbar-element section', icon: 'home', list: todoList}, 
    {textContent: 'Today', class:'navbar-element section', icon: 'today', list: todoToday}, 
    {textContent: 'Next 7 days', class: 'navbar-element section', icon: 'week', list: todoWeek},
    {textContent: 'Add to do', class: 'navbar-element new-todo', icon: 'add'}, 
    {textContent: 'Projects', id: 'projects-header',},
    {textContent: 'Add Project', class: 'navbar-element projects', icon: 'add'},]
    
    header.id = 'header'
    mainContent.id = 'main-content'
    navbarContainer.id = 'navbar-container'
    listContainer.id = 'list-container'
    taskListContainer.id = 'task-list-container'
    listHeader.id = 'list-title'
    title.textContent = 'To do list'
    listHeader.textContent = 'Home'

    navbarElements.forEach(element => {
        let navbarOption = document.createElement('div')
        navbarOption.textContent = element.textContent

        if (element.class !== undefined && element.class.includes('section')) {
            
            navbarOption.setAttribute('class', element.class)
            navbarOption.addEventListener('click', e => {
            listHeader.textContent = element.textContent
            for (let i = 0; i < 3; i++) {
                navbarContainer.childNodes[i].style.backgroundColor = 'transparent'
                navbarContainer.childNodes[i].style.fontWeight = 400
            }
            navbarOption.style.fontWeight = 900
            navbarOption.style.backgroundColor = 'hsl(0, 0%, 69%)'
            navbarOption.style.borderRadius = '10px'
            if (element.icon === 'today') {
                element.list = todoToday
            }
            else if (element.icon === 'week') {
                element.list = todoWeek
            }
            currentList = element.list
            renderCurrentList(currentList, taskListContainer)
            currentList = element.icon
            })
        }
        
        else if (element.class !== undefined) {
            navbarOption.setAttribute('class', element.class)
        }

        if (element.class !== undefined && element.class.includes('new-todo')) {
            createTask(navbarOption)
        }


        if (element.id !== undefined) {
            navbarOption.setAttribute('id', element.id)
        }

        if (element.icon !== undefined) {
            addIcon(navbarOption, element.icon, 'afterbegin')
        }
        navbarContainer.appendChild(navbarOption)
    });

    checkIcon(header)
    header.appendChild(title)
    container.append(header, mainContent)
    mainContent.append(navbarContainer, listContainer)
    listContainer.append(listHeader, taskListContainer)
    renderCurrentList(currentList, taskListContainer)
}