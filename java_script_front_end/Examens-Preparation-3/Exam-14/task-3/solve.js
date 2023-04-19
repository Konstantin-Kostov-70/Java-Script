// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const elementTitle = document.querySelector('#title')
    const todoList = document.querySelector('#todo-list')

    const btnAdd = document.querySelector('#add-button')
    const btnLoad = document.querySelector('#load-button')
    btnAdd.addEventListener('click', add)
    btnLoad.addEventListener('click', load)

    async function add(ev) {
        if (ev) {
            ev.preventDefault()
        }
       const title = elementTitle.value
       const headers = {
        method: 'POST',
        body: JSON.stringify({
            name: title
        })
       }
       await fetch(BASE_URL, headers)
       elementTitle.value = ''
       load()
    }

    async function load(ev) {
        if (ev) {
            ev.preventDefault()
        }
        todoList.innerHTML = ''
        const res = await fetch(BASE_URL)
        const data = await res.json()
        Object.values(data).forEach(obj => {
            const li = createElement('li', null, todoList, obj._id)
            const span = createElement('span', obj.name, li)
            const btnRemove = createElement('button', 'Remove', li)
            const btnEdit = createElement('button', 'Edit', li)

            btnRemove.addEventListener('click', removeTask)
            btnEdit.addEventListener('click', createInput)

        })
    }

    async function removeTask(ev) {
        let id = ev.target.parentNode.id
        let headers = {
            method: 'DELETE'
        }
        await fetch(`${BASE_URL}${id}`, headers)
        load()
    }

    function createInput(ev) {
        let parent = ev.target.parentNode
       
        const btnSubmit = parent.querySelector('button:nth-child(3)')
        btnSubmit.textContent = 'Submit'
        btnSubmit.removeEventListener('click', createInput)
        btnSubmit.addEventListener('click', edit)
        
        const span = parent.querySelector('span')
        let text = span.textContent
        parent.removeChild(span)
        
        const input = createElement('input')
        input.value = text
        parent.insertBefore(input, parent.firstChild)
        
    }

    async function edit(ev) {
        let parent = ev.target.parentNode
        let id = parent.id
        let input = parent.querySelector('input')

        let headers = {
            method: 'PATCH',
            body: JSON.stringify({
                name: input.value
            })
        }

        await fetch(`${BASE_URL}${id}`, headers)
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

attachEvents();
