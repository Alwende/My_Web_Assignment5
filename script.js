// Change Text Content Dynamically
const dynamicTextElement = document.getElementById('dynamicText');
if (dynamicTextElement) {
    dynamicTextElement.textContent = 'The text has been changed by JavaScript!';
}

// Modify CSS Styles via JavaScript
const styleButton = document.getElementById('styleButton');
if (styleButton) {
    styleButton.addEventListener('click', () => {
        document.body.style.backgroundColor = '#f0f0f0'; // Light gray background
        document.querySelector('header h1').style.color = 'navy'; // Dark blue heading
        dynamicTextElement.style.fontWeight = 'bold'; // Make the paragraph text bold
    });
}

// Add or Remove an Element when a Button is Clicked
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const list = document.getElementById('myList');

if (addButton) {
    addButton.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${list.children.length + 1}`;
        list.appendChild(newItem);
    });
}

if (removeButton && list.children.length > 0) {
    removeButton.addEventListener('click', () => {
        if (list.children.length > 0) {
            list.removeChild(list.lastElementChild);
        }
    });
}