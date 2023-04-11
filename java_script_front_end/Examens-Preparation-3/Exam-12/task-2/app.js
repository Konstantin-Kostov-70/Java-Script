function solution() {
    const input = document.querySelector('input')
    const ulList = document.querySelector('body > div > section:nth-child(2) > ul')
    const ulSend = document.querySelector('body > div > section:nth-child(3) > ul')
    const ulDiscard = document.querySelector('body > div > section:nth-child(4) > ul')
    const btnAdd = document.querySelector('body > div > section:nth-child(1) > div > button')
    btnAdd.addEventListener('click', addGift)

    function addGift() {
        let gift = input.value
        const li = createEl('li', gift, ulList, null, ['gift'])
        const btnSend = createEl('button', 'Send', li, 'sendButton')
        const btnDiscard = createEl('button', 'Discard', li, 'discardButton')
        btnSend.addEventListener('click', send)
        btnDiscard.addEventListener('click', discard)
        Array.from(ulList.querySelectorAll('li'))
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => ulList.appendChild(li))
        input.value = ''

        function send(ev) {
           ulSend.appendChild(ev.target.parentNode)
           ev.target.parentNode.querySelector('#discardButton').remove()
           ev.target.parentNode.querySelector('#sendButton').remove()
        }

        function discard(ev) {
            ulDiscard.appendChild(ev.target.parentNode)
            ev.target.parentNode.querySelector('#sendButton').remove()
            ev.target.parentNode.querySelector('#discardButton').remove()
        }
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