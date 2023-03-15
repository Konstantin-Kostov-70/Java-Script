function addItem() {
    const itemText = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');
    const itemSelect = document.getElementById('menu')
    const option = document.createElement('option');

    option.textContent = itemText.value;
    option.value = itemValue.value;

    itemSelect.appendChild(option);

    itemText.value = '';
    itemValue.value = '';   
}