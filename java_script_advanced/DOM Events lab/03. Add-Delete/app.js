document.querySelector('#items').addEventListener('click', removeRow)

function removeRow(ev) {
   console.log(ev.target.tagName)
    if (ev.target.tagName === 'A') {
     ev.target.parentNode.remove();
    }
 }

function addItem() {
    const btn = document.getElementById('newItemText');
    const text = btn.value;
    const ul = document.getElementById('items');
    const li = document.createElement('li');
    const anchor = document.createElement('a');
    document.querySelector('main').addEventListener('click', removeRow)
    
    anchor.href = '#';
    anchor.textContent = '[Delete]';
    li.textContent = text;
 //    li.appendChild(document.createTextNode(text));
    li.appendChild(anchor);
    ul.appendChild(li);
    btn.value = '';
}

