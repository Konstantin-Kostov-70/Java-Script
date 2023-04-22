function solve() {
    let updateId = ''
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/'
    const productName = document.querySelector('#product')
    const productCount = document.querySelector('#count')
    const productPrice = document.querySelector('#price')

    const btnAdd = document.querySelector('#add-product')
    btnAdd.addEventListener('click', addProduct)

    const btnUpdate = document.querySelector('#update-product')
    btnUpdate.addEventListener('click',updateProduct)
    
    const btnLoad = document.querySelector('#load-product')
    btnLoad.addEventListener('click', loadProduct)
    
    const tbody = document.querySelector('#tbody')
    tbody.addEventListener('click', deleteProduct)
    tbody.addEventListener('click', activateUpdateButton)

    async function loadProduct(ev) {
        if (ev) {
            ev.preventDefault()
        }
        tbody.innerHTML = ''
        const res = await fetch(BASE_URL)
        const data = await res.json()
        Object.values(data).forEach(({ product, count, price, _id }) => {
        
           const tr = document.createElement('tr')
           const tdName = createEl('td', 'name', product, null, tr)
           const tdCount = createEl('td', 'count-product', count, null, tr)
           const tdPrice = createEl('td', 'product-price', price, null, tr)
           const tdButtons = createEl('td', 'btn', null, _id, tr)
           const upButton = createEl('button', 'update', 'Update', null, tdButtons)
           const delButton = createEl('button', 'delete', 'Delete', null, tdButtons)

           tbody.appendChild(tr)

        })
    }

    async function addProduct(ev) {
        ev.preventDefault()
        await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                product: productName.value,
                count: productCount.value,
                price: productPrice.value
            })
       })
       productName.value = ''
       productCount.value = ''
       productPrice.value = ''

       loadProduct()
    }

    async function deleteProduct(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Delete') {
            let id = ev.target.parentElement.id
            await fetch(`${BASE_URL}${id}`, {
                method: 'DELETE'
            })

            ev.target.parentElement.parentElement.remove()
        }
    }

    function activateUpdateButton(ev) {
        
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Update') {
            updateId = ev.target.parentElement.id
            btnUpdate.disabled = false
            btnAdd.setAttribute('disabled', true)

            productName.value = ev.target.parentElement.parentElement.querySelector('td.name').textContent
            productCount.value = ev.target.parentElement.parentElement.querySelector('td.count-product').textContent
            productPrice.value = ev.target.parentElement.parentElement.querySelector('td.product-price').textContent
            
        }

    }

    async function updateProduct(ev) {
        await fetch(`${BASE_URL}${updateId}`, {
            method: 'PATCH',
            body: JSON.stringify({
                product: productName.value,
                count: productCount.value,
                price: productPrice.value
            })
        })

        productName.value = ''
        productCount.value = ''
        productPrice.value = ''

        btnUpdate.disabled = true
        btnAdd.disabled = false
        loadProduct()
    }

    function createEl(tag, _class, text, _id, parent) {
        let element = document.createElement(tag)
        if (_class) {
            element.classList.add(_class)
        }
        if (text) {
            element.textContent = text
        }
        if (id) {
            element.id = id
        }

        if (parent) {
            parent.appendChild(element)
        }

        return element
    }
}

solve()