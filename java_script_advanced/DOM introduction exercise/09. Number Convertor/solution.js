function solve() {
   const num = document.querySelector('#input');
   const btn = document.querySelector('#container > button');
   btn.addEventListener('click', onClick);
   const select = document.querySelector('#selectMenuTo');
   const result = document.querySelector('#result')

   const option1 = document.createElement('option');
   const option2 = document.createElement('option');
   option1.textContent = 'Binary';
   option1.value = 'binary';
   option2.textContent = 'Hexadecimal';
   option2.value = 'hexadecimal';
   select.appendChild(option1);
   select.appendChild(option2);
   
   function onClick(ev) {
     let options = Array.from(select.querySelectorAll('option'))
      if (options[1].selected){
        result.value = (num.value >>> 0).toString(2);
      }
      else if (options[2].selected) {
        result.value = (num.value >>> 0).toString(16).toUpperCase();
      }
      else {
        result.value = ''
      }
   }
}