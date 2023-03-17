function colorize() {
    let colorizedRows = Array.from(document.querySelectorAll('tr:nth-of-type(2n)'));
    colorizedRows.forEach(td => td.style.backgroundColor = 'teal');
 }