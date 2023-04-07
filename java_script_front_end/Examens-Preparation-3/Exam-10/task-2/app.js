window.addEventListener('load', solve);

function solve() {
    let total = 0;
   const inputs = {
       model: document.querySelector('#model'),
       year: document.querySelector('#year'),
       description: document.querySelector('#description'),
       price: document.querySelector('#price'),
    }

    document.querySelector('#add').addEventListener('click', add) 

    function add(event) {
        const tbody = document.querySelector('#furniture-list')

        event.preventDefault()
        let model = inputs.model.value
        let year = inputs.year.value
        let description = inputs.description.value
        let price = Number(inputs.price.value)

        if (!model || !year || !description || !price || year < 0 || price < 0) {
            return
        }

        // const trInfo = createEl('tr',null, tbody, null, ['info'])
        // const trHide = createEl('tr',null, tbody, null, ['hide'])
        // const tdModel = createEl('td', model, trInfo)
        // const tdPrice = createEl('td', `${price.toFixed(2)}`, trInfo)
        // const tdButtons = createEl('td',null, trInfo)
        // const btnMoreInfo = createEl('button', 'More Info', tdButtons, null, ['moreBtn'])
        // const btnBuy = createEl('button', 'Buy it', tdButtons, null, ['buyBtn'])
        // const tdYear = createEl('td', `Year: ${year}`, trHide)
        // const tdDesc = createEl('td', `Description: ${description}`, trHide, null, null, {colspan: 3})

        const trInfo = document.createElement('tr')
        trInfo.className = 'info'
        trInfo.innerHTML = `
        <td>${model}</td>
        <td>${price.toFixed(2)}</td>
        <td>
           <button class="moreBtn">More Info</button>
           <button class="buyBtn">Buy it</button>
        </td>`
        const btnMoreInfo = trInfo.querySelector('button.moreBtn')
        const btnBuy = trInfo.querySelector('button.buyBtn')

        btnMoreInfo.addEventListener('click', moreInfo)
        btnBuy.addEventListener('click', buy)

        const trHide = document.createElement('tr')
        trHide.className = 'hide'
        trHide.style.display = 'none'

        trHide.innerHTML = 
        `<td>Year: ${year}</td>
        <td colspan="3">Description: ${description}</td>`

        tbody.appendChild(trInfo)
        tbody.appendChild(trHide)
       
        Object.values(inputs).forEach(el => el.value = '')

        function moreInfo(ev) {
            
            if (ev.target.textContent === 'More Info') {
               
                trHide.style.display = 'contents'
                btnMoreInfo.textContent = 'Less Info'
            }
            else if (ev.target.textContent === 'Less Info') {
                trHide.style.display = 'none'
                btnMoreInfo.textContent = 'More Info'
            }

        }

        function buy() {
           let sum = document.querySelector('#information > tfoot > tr > td.total-price')
           total += price
           sum.textContent = total.toFixed(2)
           trInfo.remove()
           trHide.remove()
        }  
    }

    // function createEl(tag, text, parent, _id, _class, attributes) {
    //     let element = document.createElement(tag)

    //     if (text) {
    //         if (tag === 'input' || tag === 'textarea') {
    //             element.value = text
    //         }
    //         else {
    //             element.textContent = text
    //         }
    //     }
    //     if (parent) {
    //         parent.appendChild(element)
    //     }
    //     if (_id) {
    //         element.id = _id
    //     }
    //     if (_class) {
    //         element.classList.add(..._class)
    //     }
    //     if (attributes) {
    //         for (key in attributes) {
    //             element.setAttribute(key, attributes[key])
    //         }
    //     }
    //     return element
    // }
}
