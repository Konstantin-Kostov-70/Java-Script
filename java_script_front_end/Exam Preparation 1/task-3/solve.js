
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const input = document.querySelector('#title')

    const btnLoad = document.querySelector('#load-button')
    btnLoad.addEventListener('click', loadTasks)

    const btnAdd = document.querySelector('#add-button')
    btnAdd.addEventListener('click', addTask)

    const todoList = document.querySelector('#todo-list')
    todoList.addEventListener('click', removeTask)
    todoList.addEventListener('click', editForm)
    todoList.addEventListener('click', editTask)

    async function loadTasks(ev) {
        if (ev) {
            ev.preventDefault()
        }
        todoList.innerHTML = ''
        const res = await fetch(BASE_URL)
        const data = await res.json()
        Object.values(data).forEach(el => {
     
           const li = document.createElement('li')
           const span = document.createElement('span')
           const btnRemove = document.createElement('button')
           const btnEdit = document.createElement('button')

           li.id = el._id
           span.textContent = el.name
           btnRemove.textContent = 'Remove'
           btnEdit.textContent = 'Edit'

           li.appendChild(span)
           li.appendChild(btnRemove)
           li.appendChild(btnEdit)

           todoList.appendChild(li)
        })
    }

    async function addTask(ev) {
        ev.preventDefault()
        if (input.value == '') {
            return
        }
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               name: input.value
            })
        })

        input.value = ''
        loadTasks(ev)
    }

    async function removeTask(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Remove') {
            let id  = ev.target.parentElement.id
            await fetch(`${BASE_URL}${id}`, {
                method: 'DELETE'
            })
            ev.target.parentElement.remove()
        }
    }

    function editForm(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Edit') {
            
            let li = ev.target.parentElement
            let span = li.querySelector('span')
            li.innerHTML = `
                <input type="text" value="${span.textContent}">
                <button>Remove</button>
                <button>Submit</button>`
        }
    }

    async function editTask(ev) {
        if  (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Submit') {
            let li = ev.target.parentElement
            let editInput = li.querySelector('input')
            let text = editInput.value

            await fetch(`${BASE_URL}${li.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: text
                })
            })

            li.innerHTML = `
            <span>${text}</span>
            <button>Remove</button>
            <button>Edit</button>`

        }
    } 
}

attachEvents();
