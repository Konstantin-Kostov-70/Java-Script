function solve() {
  const textArea = document.getElementById('input');
  const allSentences = textArea.value.split('.');
  const div = document.getElementById('output');
  console.log(allSentences)
  allSentences.pop();

  while (allSentences.length > 0) {
    let paragraph = document.createElement('p')
    currentText = allSentences.splice(0, 3)
    .map(p => p.trimStart());
    paragraph.textContent = currentText.join('.') + '.';
    div.appendChild(paragraph)
  }
}