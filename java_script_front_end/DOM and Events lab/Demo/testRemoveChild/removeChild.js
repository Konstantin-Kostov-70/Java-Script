function remove() {
    let blueElements = document.getElementsByClassName('blue');
    let firstLi = blueElements[0];
    firstLi.remove() 
}

let buttons = document.getElementsByClassName('btn');
for (let button of buttons) {
    button.addEventListener('focus', onFocus);
    button.addEventListener('blur', onBlur)
}

let span = document.getElementById('sp');
let value = span.textContent;

function onFocus(event) {
    event.target.style.backgroundColor = 'blue';
    value++
    span.textContent = value;  
}

function onBlur(event) {
    event.target.style.backgroundColor = 'red';
}