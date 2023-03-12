function sumTable() {
    let totalSum = 0;
    let sum = document.getElementById('sum')
    let allRows = Array.from(document.querySelectorAll('tr'));
    let productsRows = allRows.slice(1, allRows.length - 1);

    productsRows.forEach(row => {
        let td = row.children[1];
        totalSum += Number(td.textContent);
    })
    sum.textContent = totalSum;
}