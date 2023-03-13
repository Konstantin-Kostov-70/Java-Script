function addItem() {
   const btn = document.getElementById('newItemText');
   const text = btn.value;
   const ul = document.getElementById('items');
   const li = document.createElement('li');

   li.textContent = text;
//    li.appendChild(document.createTextNode(text));
   ul.appendChild(li);
   btn.value = '';
}