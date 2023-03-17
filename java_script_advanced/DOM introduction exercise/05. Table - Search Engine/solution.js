function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick(ev) {
      let input = document.querySelector('#searchField')
      let searchText = input.value;
      let allRows = Array.from(document.querySelector('tbody')
      .children)


      for (let row of allRows) {
         if (row.classList.contains('select')) {
            row.classList.remove('select')
         }
         let trimmedText = row.textContent.trim()
         
         if (trimmedText.includes(searchText)) {
            row.classList.add('select')
         }
      }     
      input.value = ''
   }
}