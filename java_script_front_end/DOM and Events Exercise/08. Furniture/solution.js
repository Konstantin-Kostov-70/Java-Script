function solve() {
    const [listArea, buyArea] = Array.from(document.querySelectorAll('textarea'));
    const [genBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
    const tBody = document.querySelector('tbody')
  
    genBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);
  
    function generate(e) {
      const data = JSON.parse(listArea.value);
  
      for (let item of data) {
        const row = document.createElement('tr');
        
        row.appendChild(createCell('img', {src: item.img}));
        row.appendChild(createCell('p', {}, item.name));
        row.appendChild(createCell('p', {}, item.price));
        row.appendChild(createCell('p', {}, item.decFactor));
        row.appendChild(createCell('input', {type: 'checkbox'}));
  
        tBody.appendChild(row);
  
      }
    }
  
    function createCell(tag, props, content) {
      const ceil = document.createElement('td');
      const element = document.createElement(tag);
  
      for (let prop in props){
        element[prop] = props[prop];
      }
      if (content) {
        element.textContent = content
      };
  
      ceil.appendChild(element);
      return ceil;
    }
  
    function buy(e) {
      const furniture = Array
        .from(document.querySelectorAll('input[type=checkbox]:checked'))
        .map(r => r.parentElement.parentElement)
        .map(r => ({
          name: r.children[1].textContent,
          price: Number(r.children[2].textContent),
          decFactor: Number(r.children[3].textContent),
        }))
        .reduce((acc, c, i, arr) => {
           acc.names.push(c.name);
           acc.total += c.price;
           acc.average += c.decFactor / arr.length;
           return acc 
        }, {names: [], total: 0, average: 0})
        console.log(furniture)
    
      // let names = []
      // let total = 0;
      // let average = 0;
  
      // for (let item of furniture) {
      //   names.push(item.name)
      //   total += item.price
      //   average += item.decFactor
      // }
      buyArea.value = `Bought furniture: ${furniture.names.join(', ')}\n` +
      `Total price: ${furniture.total.toFixed(2)}\n` +
      `Average decoration factor: ${furniture.average}`
    }
  }