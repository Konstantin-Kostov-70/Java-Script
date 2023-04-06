window.addEventListener('load', solve);

function solve() {
    const inputs = {
        product: document.querySelector('#type-product'),
        description: document.querySelector('#description'),
        name: document.querySelector('#client-name'),
        phone: document.querySelector('#client-phone')
    }

    document.querySelector('#right > form > button').addEventListener('click', addToReceived)
    document.querySelector('#completed-orders > button').addEventListener('click', clear)

    const receivedOrders = document.querySelector('#received-orders')
    const completedOrders = document.querySelector('#completed-orders')

    function addToReceived(event) {
        event.preventDefault()
        let product = inputs.product.value
        let description = inputs.description.value
        let name = inputs.name.value
        let phone = inputs.phone.value

        if (!description || !name || !phone) {
            return
        }

        const container = document.createElement('div')
        container.className = 'container'
        container.innerHTML = `
        <h2>Product type for repair: ${product}</h2>
        <h3>Client information: ${name}, ${phone}</h3>
        <h4>Description of the problem: ${description}</h4>
        <button class="start-btn">Start repair</button>
        <button class="finish-btn" disabled>Finish repair</button>`

        const btnStart = container.querySelector('button.start-btn')
        btnStart.addEventListener('click', start)
        const btnFinish = container.querySelector('button.finish-btn')
        btnFinish.addEventListener('click', finish)

        receivedOrders.appendChild(container)
        Object.values(inputs).forEach(el => el.value = '')

        function start() {
            btnStart.disabled = true
            btnFinish.disabled = false
        }

        function finish() {
            completedOrders.appendChild(container)
            btnStart.remove()
            btnFinish.remove()
        }

    }

    function clear() {
       completedOrders.innerHTML = `
       <h2>Completed orders:</h2>
       <img src="./style/img/completed-order.png">`
    }
}