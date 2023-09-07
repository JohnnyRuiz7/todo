import { checkIcon, addIcon} from "./icons";

// Function to create the basic UI
export function createHomeUI(container) {
    let header = document.createElement('div')
    let title =  document.createElement('div')
    let mainContent = document.createElement('div')
    let navbarContainer = document.createElement('div')
    let listContainer = document.createElement('div')
    let listHeader = document.createElement('h2')
    let addTask = document.createElement('div')

    const navbarElements = [
    {textContent: 'Home', class: 'navbar-element', icon: 'home'}, 
    {textContent: 'Today', class:'navbar-element', icon: 'today'}, 
    {textContent: 'This week', class: 'navbar-element', icon: 'week'}, 
    {textContent: 'Projects', id: 'projects-header',},
    {textContent: 'Add Project', class: 'navbar-element projects', icon: 'add'},]
    
    header.id = 'header'
    mainContent.id = 'main-content'
    navbarContainer.id = 'navbar-container'
    listContainer.id = 'list-container'
    listHeader.id = 'list'
    addTask.setAttribute('class', 'add-task')
    title.textContent = 'To do list'
    listHeader.textContent = 'Home'
    addTask.textContent = 'Add new task'

    navbarElements.forEach(element => {
        let navbarOption = document.createElement('div')
            for (const property in element) {
                navbarOption.setAttribute(`${property}`, `${element[property]}`)
                navbarOption.textContent = `${element.textContent}`
                navbarOption.removeAttribute('textContent')
                if (navbarOption.hasAttribute('icon')) {
                    addIcon(navbarOption, `${element.icon}`)
                }
            }
        navbarContainer.appendChild(navbarOption)
    });

    checkIcon(header)
    addIcon(addTask, 'add')
    header.appendChild(title)
    container.append(header, mainContent)
    mainContent.append(navbarContainer, listContainer)
    listContainer.append(listHeader, addTask)
}