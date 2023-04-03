window.addEventListener("load", solve);

function solve() {
  
  allInputs = {
    make: document.querySelector('#make'),
    model: document.querySelector('#model'),
    year: document.querySelector('#year'),
    fuel: document.querySelector('#fuel'),
    price: document.querySelector('#original-cost'),
    newPrice: document.querySelector('#selling-price')
  }
  const tbody = document.querySelector('#table-body')
  const sellCars = document.querySelector('#cars-list')
  const profit = document.querySelector('#profit')
  const btnPublish = document.querySelector('#publish')
  btnPublish.addEventListener('click', addCar)


  function addCar(ev) {
    ev.preventDefault()
    let isFull = Object.values(allInputs).every(el => el.value !== '')
    if (!isFull || Number(allInputs.price.value) > Number(allInputs.newPrice.value)) {
      return
    }

    const {make, model, year, fuel, price, newPrice} = allInputs
    const fuelValue = Array.from(fuel.children).find((option) => option.selected).value

    const tr = createEl('tr', null, tbody, null, ['row'])
    const tdMake = createEl('td', make.value, tr)
    const tdModel = createEl('td', model.value, tr)
    const tdYear = createEl('td', year.value, tr)
    const tdFuel = createEl('td', fuelValue, tr)
    const tdPrice = createEl('td', price.value, tr)
    const tdNewPrice = createEl('td', newPrice.value, tr)

    const btnEdit = createEl('button', 'Edit', tr, null, ['action-btn', 'edit'])
    btnEdit.addEventListener('click', editCar)

    const btnSell = createEl('button', 'Sell', tr, null, ['action-btn', 'sell'])
    btnSell.addEventListener('click', sellCar)

    Object.values(allInputs).forEach(e => e.value = '')

  }

  function editCar(ev) {
    // take all text from the table and return to the input fields
     const allValues = Array
     .from(ev.target.parentElement.children)
     .filter(el => el.tagName === 'TD')
     .map(el => el.textContent)

     Object.values(allInputs).forEach((el, idx) => {
       el.value = allValues[idx]
     })

     ev.target.parentElement.remove()
    
  }

  function sellCar(ev) {

    const allValues = Array
    .from(ev.target.parentElement.children)
    .filter(el => el.tagName === 'TD')
    .map(el => el.textContent)

    let [make, model, year, fuel, price, newPrice] = allValues
    let average =  Number(newPrice) - Number(price)

    const li = createEl('li', null, sellCars, null, ['each-list'])
    const spanInfo = createEl('span',`${make} ${model}`, li, )
    const spanYear = createEl('span',`${year}`, li, )
    const spanPrice = createEl('span',`${average}`, li, )
    profit.textContent = average.toFixed(2)
    
    ev.target.parentElement.remove()
  }

  function createEl(tag, text, parent, _id, _class, attributes) {
    let element = document.createElement(tag)

    if (text) {
        if (tag === 'input' || tag === 'textarea') {
            element.value = text
        }
        else {
            element.textContent = text
        }
    }
    if (parent) {
        parent.appendChild(element)
    }
    if (_id) {
        element.id = _id
    }
    if (_class) {
        element.classList.add(..._class)
    }
    if (attributes) {
        for (key in attributes) {
            element.setAttribute(key, attributes[key])
        }
    }
    return element
}

}
