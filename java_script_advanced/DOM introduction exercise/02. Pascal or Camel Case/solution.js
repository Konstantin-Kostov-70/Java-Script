function solve() {
  let text = document.getElementById('text')
    .value
    .toLowerCase()
    .split(' ');
  let result = document.getElementById('result')
  convention = document.getElementById('naming-convention').value;

  function convert(currentText) {
      let convertText = currentText.map(word => {
      let firstLetter = word[0].toUpperCase();
      let otherLetters = word.slice(1, word.length);
      word = firstLetter + otherLetters;
      return word;
    })
    return convertText.join('')
  }

  switch (convention) {
    case "Camel Case":
      let firstWord = text.shift();
      let otherText = convert(text);

      result.textContent = firstWord + otherText;
      break;

    case "Pascal Case":
      let newText = convert(text);
      result.textContent = newText
      break;

    default:
      result.textContent = 'Error!'

  }

}