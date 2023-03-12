function extractText() {
    const items = document.getElementById('items').children;
    const arrayItems = Array.from(items);
    const text = arrayItems.map(li => li.textContent).join('\n');
    const result = document.getElementById('result');
    result.value = text;
}

