function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/'
    const allInputs = {
        product: document.querySelector('#product'),
        count: document.querySelector('#count'),
        price: document.querySelector('#price')
    }
    const tbody = document.querySelector('#tbody')
    const allProductInfo = []

    const btnAdd = document.querySelector('#add-product')
    btnAdd.addEventListener('click', addProduct)

    const btnUpdate = document.querySelector('#update-product')
    btnUpdate.addEventListener('click', updateProduct)

    const btnLoad = document.querySelector('#load-product')
    btnLoad.addEventListener('click', loadProducts)

    currentId = ''

    async function loadProducts(ev) {
        if (ev) {
            ev.preventDefault()
        }
        tbody.innerHTML = ''
        const result = await fetch(BASE_URL)
        const data = await result.json()
        Object.values(data).forEach(el => {
            allProductInfo.push(el)
            const { product, count, price, _id } = el


            const tr = createEl('tr', null, tbody, _id)
            const tdName = createEl('td', product, tr, null, ['name'])
            const tdCount = createEl('td', count, tr, null, ['count-product'])
            const tdPrice = createEl('td', price, tr, null, ['product-price'])
            const tdButtons = createEl('td', null, tr, null, ['btn'])
            const btnUp = createEl('button', 'Update', tdButtons, null, ['update'])
            const btnDel = createEl('button', 'Delete', tdButtons, null, ['delete'])
            btnUp.addEventListener('click', returnInfoToForm)
            btnDel.addEventListener('click', deleteProducts)


        })
    }

    async function addProduct(ev) {
        ev.preventDefault()
        let isNotEmpty = Object.values(allInputs).every(el => el.value !== '')
        if (isNotEmpty) {
            await fetch(BASE_URL, {
                method: 'POST',
                body: JSON.stringify({
                    product: allInputs.product.value,
                    count: allInputs.count.value,
                    price: allInputs.price.value
                })
            })
            Object.values(allInputs).forEach(el => el.value = '')
            loadProducts()
        }
    }

    function returnInfoToForm(ev) {
        let id = ev.target.parentNode.parentNode.id
        const obj = allProductInfo.find((el) => el._id === id)
        currentId = obj._id
        for(let key in allInputs) {
            allInputs[key].value = obj[key]
        }

        btnUpdate.disabled = false
        btnAdd.disabled = true

    }

    async function updateProduct() {
      await fetch(`${BASE_URL}${currentId}`, {
        method: 'PATCH',
        body: JSON.stringify({
            product: allInputs.product.value,
            count: allInputs.count.value,
            price: allInputs.price.value
        })
      }) 

      btnUpdate.disabled = true
      btnAdd.disabled = false
      Object.values(allInputs).forEach(el => el.value = '')
      loadProducts()
      
    }

    async function deleteProducts(ev) {
        let id = ev.target.parentNode.parentNode.id
        await fetch(`${BASE_URL}${id}`, {
            method: 'DELETE',
        })
        ev.target.parentNode.parentNode.remove()
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
            element.classList.add(_class)
        }
        if (attributes) {
            for (key in attributes) {
                element.setAttribute(key, attributes[key])
            }
        }
        return element
    }

}

solve()