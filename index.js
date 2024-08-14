let selectedColor = ''

function selectColor(color,button) {
    selectedColor = color;
    button.style.border = '2px solid solid black';

    const buttons = document.querySelectorAll('.colorButton');
    buttons.forEach(button =>  button.classList.remove('selected'));
    button.classList.add('selected');
}

function applyColor() {
    if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
    } 
        
    else {
        alert('Please select a color.');
    }
}

