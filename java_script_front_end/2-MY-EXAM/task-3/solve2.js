// TODO:
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
            
            let li = createElement('li', null, null, null, ['task'])
            let h3 = createElement('h3', title, li)
            let p = createElement('p', description, li)
            let btn = createElement('button', null, li, _id)

            if (status === 'ToDo') {
                addTextAndListener('Move to In Progress', moveToProgress, btn)
                toDo.appendChild(li)
            }
            else if (status === 'In Progress') {
                addTextAndListener('Move to Code Review', moveToReview, btn)
                inProgress.appendChild(li)
            }
            else if (status === 'Code Review') {
                addTextAndListener('Move to Done', moveToDone, btn)
                codeReview.appendChild(li)
            }
            else if (status === 'Done') {
                addTextAndListener('Close', deleteTask, btn)
                done.appendChild(li)
            }
        })

        function addTextAndListener(text, func, btn) {
            btn.textContent = text
            btn.addEventListener('click', func)
        }
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

    async function moveToProgress(ev) {
        const id = ev.target.id
        await fetch(`${baseURL}${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                status: 'In Progress'
            })
        })
        changeTextAndListener('Move to Code Review', moveToProgress, moveToReview, ev.target)
        inProgress.appendChild(ev.target.parentNode)
    }

    async function moveToReview(ev) {
        const id = ev.target.id
        await fetch(`${baseURL}${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                status: 'Code Review'
            })
        })
        changeTextAndListener('Move to Done', moveToReview, moveToDone, ev.target)
        codeReview.appendChild(ev.target.parentNode)
    }

    async function moveToDone(ev) {
        const id = ev.target.id
        await fetch(`${baseURL}${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                status: 'Done'
            })
        })
        changeTextAndListener('Close', moveToReview, deleteTask, ev.target)
        done.appendChild(ev.target.parentNode)
    }

    async function deleteTask(ev) {
        const id = ev.target.id
        await fetch(`${baseURL}${id}`, {
            method: 'DELETE',
        })
        ev.target.parentNode.remove()
    }

    function changeTextAndListener(text, oldListener, newListener, btn) {
        btn.textContent = text
        btn.removeEventListener('click', oldListener)
        btn.addEventListener('click', newListener)
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