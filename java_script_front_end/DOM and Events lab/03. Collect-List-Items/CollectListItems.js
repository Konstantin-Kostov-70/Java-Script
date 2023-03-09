function extractText() {
    const items = document.getElementById('items').children
    const itemArray = Array.from(items)
    const result = itemArray.map(li => li.textContent).join('\n')
    const textArea = document.getElementById('result')
    textArea.value = result
}

