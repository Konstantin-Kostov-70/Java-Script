window.addEventListener("load", solve);

function solve() {
  input = {
    make: document.querySelector('#make'),
    model: document.querySelector('#model'),
    year: document.querySelector('#year'),
    fuel: document.querySelector('#fuel'),
    price: document.querySelector('#original-cost'),
    newPrice: document.querySelector('#selling-price'),
  }

  const tdBody = document.querySelector('#table-body')
  const carList = document.querySelector('#cars-list')
  let profit = document.querySelector('#profit')
  let total = 0

  document.querySelector('#publish').addEventListener('click', publish)

  function publish(ev) {
    ev.preventDefault()
    let isFul = Object.values(input).every(el => el.value !== '')

    let make = input.make.value
    let model = input.model.value
    let year = input.year.value
    let fuel = input.fuel.value
    let price = input.price.value
    let newPrice = input.newPrice.value

    if (!isFul || Number(newPrice) < Number(price)) {
      return
    }

    const tr = document.createElement('tr')
    tr.className = 'row'

    tr.innerHTML = `
    <td>${make}</td> 
    <td>${model}</td>
    <td>${year}</td>
    <td>${fuel}</td>
    <td>${price}</td>
    <td>${newPrice}</td>
    <td>
    <button class="action-btn edit">Edit</button> 
    <button class="action-btn sell">Sell</button> 
    </td>`

    tr.querySelector('td:nth-child(7) > button.action-btn.edit')
    .addEventListener('click', edit)

    tr.querySelector('td:nth-child(7) > button.action-btn.sell')
    .addEventListener('click', sell)

    tdBody.appendChild(tr)

    const average = Number(newPrice) - Number(price)
    Object.values(input).forEach( el => el.value = '')

    function edit() {

      input.make.value = make
      input.model.value = model
      input.year.value = year
      input.fuel.value = fuel
      input.price.value = price
      input.newPrice.value = newPrice
      
      tr.remove()
    }

    function sell() {
       let li = document.createElement('li')
       li.className = 'each-list'
       li.innerHTML = `
       <span>${make} ${model}</span>
       <span>${year}</span>
       <span>${average}</span>`

       carList.appendChild(li)
       total += average
       profit.textContent = total.toFixed(2)

       tr.remove()
    }

  }

}
