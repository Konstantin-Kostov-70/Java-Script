function deleteByEmail() {
   const email = document.querySelector('input[name="email"]').value;
   const rows = Array.from(document.querySelector('tbody').children)
   .filter(r => r.children[1].textContent === email)
   rows.forEach(r => r.remove())
   
   document.getElementById('result').textContent = rows.length > 0 ? 'Deleted.' : 'Not found.';
}

// function deleteByEmail() {
//    let email = document.querySelector('input[name="email"]').value;
//    let secondColumn = document.querySelectorAll('#customers tr td:nth-child(2)');

//    for (let td of secondColumn) {
//       if (td.textContent === email) {
//          let row = td.parentNode;
//          row.parentNode.removeChild(row);
//          document.getElementById('result').textContent = 'Deleted.';
//          return;
//       }
//    }
//    document.getElementById('result').textContent = 'Not found.';
// }




 

