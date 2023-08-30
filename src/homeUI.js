import { addIcons } from "./icons";

export function createHomeUI(container) {
    let header = document.createElement('div')
    let title =  document.createElement('div')
    let content = document.createElement('div')
    let navbarContainer = document.createElement('div')
    let mainListContainer = document.createElement('div')
    header.id = 'header'
    content.id = 'content'
    navbarContainer.id = 'navbar-container'
    mainListContainer.id = 'main-list-container'
    title.textContent = 'To do list'
    addIcons(header)
    header.appendChild(title)
    container.append(header, content)
    content.append(navbarContainer, mainListContainer)
}