const container = document.querySelector('.container');
const colorButtons = document.querySelectorAll('.colorChoice');
const userColorPicker = document.querySelector('#inputColor');
const clearButton = document.querySelector('.clear');
const slider = document.querySelector('#sizeRange');
let color = 'black'



function createGrid (gridNumber) {
    let gridArea = gridNumber * gridNumber;
    for (let i = 1; i <= gridArea; i++) {
        let gridItem = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.insertAdjacentElement('beforeend', gridItem);
    }
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixels => gridPixels.addEventListener('mouseover', color));
}

