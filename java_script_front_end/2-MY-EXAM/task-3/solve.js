function attachEvents() {

    const baseURL = 'http://localhost:3030/jsonstore/tasks/'
    document.querySelector('#load-board-btn').addEventListener('click', loadTasks)
    document.querySelector('#create-task-btn').addEventListener('click', createTask)

    const toDo = document.querySelector('#todo-section > ul')
    const inProgress = document.querySelector('#in-progress-section > ul')
    const codeReview = document.querySelector('#code-review-section > ul')
    const done = document.querySelector('#done-section > ul')

    const title = document.querySelector('#title')
    const desc = document.querySelector('#description')

    async function loadTasks(ev) {
        if (ev) {
            ev.preventDefault()
        }
        toDo.innerHTML = ''
        inProgress.innerHTML = ''
        codeReview.innerHTML = ''
        done.innerHTML = ''

        const res = await fetch(baseURL)
        const data = await res.json()

        Object.values(data).forEach(obj => {

            const { title, description, status, _id } = obj

            const li = createElement('li', null, null, null, ['task'])
            const h3 = createElement('h3', title, li)
            const p = createElement('p', description, li)
            const btn = createElement('button', null, li, _id)
            btn.addEventListener('click', moveTask)

            if (status === 'ToDo') {
                btn.textContent = 'Move to In Progress'
                toDo.appendChild(li)
            }
            else if (status === 'In Progress') {
                btn.textContent = 'Move to Code Review'
                inProgress.appendChild(li)
            }
            else if (status === 'Code Review') {
                btn.textContent = 'Move to Done'
                codeReview.appendChild(li)
            }
            else if (status === 'Done') {
                btn.textContent = 'Close'
                done.appendChild(li)
            }
        })

    }

    async function createTask() {
        const taskTitle = title.value
        const taskDesc = desc.value
        await fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify({
                title: taskTitle,
                description: taskDesc,
                status: 'ToDo'
            })
        })
        title.value = ''
        desc.value = ''
        loadTasks()
    }

    async function moveTask(ev) {
       let currentStatus = ev.target.textContent
       let fetchStatus = ''
       let id = ev.target.id
       
       if (currentStatus === 'Close') {
        await fetch(`${baseURL}${id}`, {
            method: 'DELETE'
        })
        ev.target.parentNode.remove()
       }

       else {
        if (currentStatus === 'Move to In Progress') {
            fetchStatus = 'In Progress'
        }
        else if (currentStatus === 'Move to Code Review') {
            fetchStatus = 'Code Review'
        }
        else if (currentStatus === 'Move to Done') {
            fetchStatus = 'Done'
        }
        await fetch(`${baseURL}${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                status: fetchStatus,
            })
        })
       }
       loadTasks()
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