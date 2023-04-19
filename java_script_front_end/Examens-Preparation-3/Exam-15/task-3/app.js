function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/'
    const form = document.querySelector('form')
    const elementProduct = document.querySelector('#product')
    const elementCount = document.querySelector('#count')
    const elementPrice = document.querySelector('#price')

    const btnAdd = document.querySelector('#add-product')
    const btnUpdate = document.querySelector('#update-product')
    const btnLoad = document.querySelector('#load-product')
    btnAdd.addEventListener('click', add)
    btnUpdate.addEventListener('click', update)
    btnLoad.addEventListener('click', load)

    const tbody = document.querySelector('#tbody')
    let currentId = ''

    async function add(ev) {
        if (ev) {
            ev.preventDefault()
        }
        let product = elementProduct.value
        let count = elementCount.value
        let price = elementPrice.value

        let headers = {
            method: 'POST',
            body: JSON.stringify({
                product,
                count,
                price
            })
        }
        await fetch(BASE_URL, headers)
        form.reset()
        load()
    }

    async function update(ev) {
        if (ev) {
            ev.preventDefault()
        }
        let headers = {
            method: 'PATCH',
            body: JSON.stringify({
                product: elementProduct.value,
                count: elementCount.value,
                price: elementPrice.value
            })
        }
        await fetch(`${BASE_URL}${currentId}`, headers)
        form.reset()
        btnAdd.disabled = false
        btnUpdate.disabled = true
        load()
    }

    async function load(ev) {
        if (ev) {
            ev.preventDefault()
        }
        tbody.innerHTML = ''
        const result = await fetch(BASE_URL)
        const data = await result.json()
        Object.values(data).forEach(({product, count, price, _id}) => {
            const tr = createElement('tr', null, tbody, _id)
            const tdName = createElement('td', product, tr, null, ['name'])
            const tdCount = createElement('td', count, tr, null, ['count-product'])
            const tdPrice = createElement('td', price, tr, null, ['product-price'])
            const tdBtn = createElement('td', null, tr, null, ['btn'])
            const btnUp = createElement('button', 'Update', tdBtn, null, ['update'])
            const btnDelete = createElement('button', 'Delete', tdBtn, null,['delete'])
            // tr.id = obj._id
            // tr.innerHTML = `	
            //     <td class="name">${obj.product}</td>
	        //     <td class="count-product">${obj.count}</td>
	        //     <td class="product-price">${obj.price}</td>
	        //     <td class="btn">
		    //         <button class="update">Update</button> 
		    //         <button class="delete">Delete</button>
	        //     </td>`
            // const btnUp = tr.querySelector('td.btn > button.update')
            // const btnDelete = tr.querySelector('td.btn > button.delete')
            btnUp.addEventListener('click', backToForm)
            btnDelete.addEventListener('click', deleteProduct)
        })
    }

    function backToForm(ev) {
        let parent = ev.target.parentNode.parentNode
        currentId = parent.id

        let product = parent.querySelector('td.name').textContent
        let count = parent.querySelector('td.count-product').textContent
        let price = parent.querySelector('td.product-price').textContent

       elementProduct.value = product
       elementCount.value = count
       elementPrice.value = price

       btnAdd.disabled = true
       btnUpdate.disabled = false
        
    }

    
    async function deleteProduct(ev) {
        let id = ev.target.parentNode.parentNode.id
        let headers = {
            method: 'DELETE'
        }
        await fetch(`${BASE_URL}${id}`, headers)
        ev.target.parentNode.parentNode.remove() 
        load()
    }
    function createElement(tag, text, parent, _id, _class, attributes) {
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

solve()