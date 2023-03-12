function addItem() {
   const text = document.getElementById('newItemText').value;
   const ul = document.getElementById('items');
   const li = document.createElement('li');
   
   li.appendChild(document.createTextNode(text));
   ul.appendChild(li);
   document.getElementById('newItemText').value = '';

} 