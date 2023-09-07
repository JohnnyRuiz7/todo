export function createTask(element) {
    element.addEventListener('click', e => {
        console.log(e.target)
    })
}