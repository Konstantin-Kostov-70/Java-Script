
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const title = document.querySelector('#title')
    const todoList = document.querySelector('#todo-list')

    const btnAdd = document.querySelector('#add-button')
    btnAdd.addEventListener('click', addTodo)

    const btnLoad = document.querySelector('#load-button')
    btnLoad.addEventListener('click', loadData)

    async function loadData(ev) {
       if ( ev) {
        ev.preventDefault()
       }
        todoList.innerHTML = ''
        const result = await fetch(BASE_URL)
        const data = await result.json()

        Object.values(data).forEach(el => {
            const { name, _id } = el
            const li = createEl('li', null, todoList, _id)
            const span = createEl('span', `${name}`, li)

            const btnRemove = createEl('button', 'Remove', li)
            btnRemove.addEventListener('click', removeTodo)

            const btnEdit = createEl('button', 'Edit', li)
            btnEdit.addEventListener('click', createEditForm)
        })
    }

    async function addTodo(ev) {
        ev.preventDefault()

        await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                name: title.value
            })
        })
        title.value = ''
        loadData()
    }

    function createEditForm(ev) {
        let li = ev.target.parentNode
        let span = li.querySelector('span')
        let text = span.textContent
        Array
        .from(li.children)
        .filter(el => el.tagName === 'BUTTON')
        .forEach(el => el.remove())

        span.remove()

        const input = createEl('input', text, li)

        const btnRemove = createEl('button', 'Remove', li)
        btnRemove.addEventListener('click', removeTodo)

        const btnSubmit = createEl('button', 'Submit', li)
        btnSubmit.addEventListener('click', submitTodo)
    }

    async function removeTodo(ev) {

        let id = ev.target.parentNode.id
        await fetch(`${BASE_URL}${id}`, {
            method: 'DELETE'
        })
        ev.target.parentNode.remove()
        loadData()
    }

    async function submitTodo(ev) {
        let li = ev.target.parentNode
        let id = li.id
        let input = li.querySelector('input')
        let text = input.value
        
        await fetch(`${BASE_URL}${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                name: text
            })
        })

        Array
        .from(li.children)
        .filter(el => el.tagName === 'BUTTON')
        .forEach(el => el.remove())

        input.remove()

        const span = createEl('span', text, li)

        const btnRemove = createEl('button', 'Remove', li)
        btnRemove.addEventListener('click', removeTodo)

        const btnSubmit = createEl('button', 'Edit', li)
        btnSubmit.addEventListener('click', createEditForm)

        loadData()

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

attachEvents();
