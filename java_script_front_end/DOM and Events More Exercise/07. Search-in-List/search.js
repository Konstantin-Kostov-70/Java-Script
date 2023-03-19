function search() {
   const searchText = document.getElementById('searchText').value;
   const items = Array.from(document.querySelectorAll('li'));
   const result = document.querySelector('#result');

   let newList = items.filter(li => li.textContent.includes(searchText));
   
   for (let li of newList) {
      li.style.fontWeight = 'bold';
      li.style.textDecoration = 'underline';
   }
   result.textContent = `${newList.length} matches found`;
}
