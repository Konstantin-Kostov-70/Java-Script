function create(words) {

   for (let word of words) {

      const container = document.getElementById('content');
      const div = document.createElement('div');
      const p = document.createElement('p');

      p.textContent = word
      p.style.display = 'none';

      div.appendChild(p);
      div.addEventListener('click', e => e.target.children[0].style.display = 'block');
      container.appendChild(div);
   }
}