export function checkIcon(container) {
    let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    let iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    iconSvg.setAttribute('viewBox', '0 0 24 24')
    iconSvg.setAttribute('stroke', 'white')
    iconSvg.setAttribute('fill', 'white')
    iconPath.setAttribute('d', 'M0.41,13.41L6,19L7.41,17.58L1.83,12M22.24,5.58L11.66,16.17L7.5,12L6.07,13.41L11.66,19L23.66,7M18,7L16.59,5.58L10.24,11.93L11.66,13.34L18,7Z')
    iconSvg.id = 'check-icon'

    iconSvg.appendChild(iconPath)
    container.appendChild(iconSvg)
}

export function addIcon(container, iconName) {
    const svgPaths =
    {home: 'M16,10H14V7H10V10H8L12,14M19,15H15A3,3 0 0,1 12,18A3,3 0 0,1 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z',
    today: 'M7,10H12V15H7M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z',
    week: 'M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z',
    add: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
    project: 'M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z',
    delete: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'}
    
        let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        let iconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path')

        iconSvg.setAttribute('viewBox', '0 0 24 24')
        iconSvg.setAttribute('stroke', 'none')
        iconSvg.setAttribute('fill', 'black')
        iconPath.setAttribute('d', svgPaths[iconName])

        iconSvg.appendChild(iconPath)
        container.insertAdjacentElement('afterbegin', iconSvg)
    
};