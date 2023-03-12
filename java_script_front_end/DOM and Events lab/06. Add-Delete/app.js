function addItem() {
    const text = document.getElementById('newItemText').value;
    if (text.length === 0) return;

    const ul = document.getElementById('items');
    const li = document.createElement('li');
    const remove = document.createElement('a');

    remove.appendChild(document.createTextNode('[Delete]'));
    remove.href = '#'
    remove.addEventListener('click', deleteItem);

    li.appendChild(document.createTextNode(text));
    li.appendChild(remove)
    ul.appendChild(li);
    document.getElementById('newItemText').value = '';

    function deleteItem() {
        li.remove()
    }
}

