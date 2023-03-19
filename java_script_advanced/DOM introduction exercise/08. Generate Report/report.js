function generateReport() {
    const checkBoxes = Array
        .from(document.querySelectorAll('input[type="checkbox"]'))
    const allRows = Array.from(document.querySelectorAll('tbody tr'));
    const textArea = document.querySelector('#output')

    let objects = []

    allRows.forEach(row => {
        let currentObject = {}
        Array.from(row.querySelectorAll('td'))
        .forEach((td, i) => {
            if (checkBoxes[i].checked) {
                currentObject[checkBoxes[i].name] = td.textContent
            }
        })
        objects.push(currentObject)
    })

    // for (let row of allRows) {
    //     const cellInRow = Array.from(row.querySelectorAll('td'))
    //     let currentObject = {}
    //     for (let i = 0; i < cellInRow.length; i++) {
           
    //         if (checkBoxes[i].checked) {
    //             currentObject[checkBoxes[i].name] = cellInRow[i].textContent         
    //         }
    //     }
    //     objects.push(currentObject)
    // }

    textArea.value = JSON.stringify(objects)
}