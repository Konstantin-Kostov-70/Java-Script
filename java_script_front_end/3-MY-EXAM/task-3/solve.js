// TODO:
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const elementTitle = document.querySelector('#title')
    const elementDesc = document.querySelector('#description')
    const todo = document.querySelector('#todo-section > ul')
    const inProgress = document.querySelector('#in-progress-section > ul')
    const codeReview = document.querySelector('#code-review-section > ul')
    const done = document.querySelector('#done-section > ul')

    document.querySelector('#load-board-btn').addEventListener('click', loadTasks)
    document.querySelector('#create-task-btn').addEventListener('click', addTask)

    async function loadTasks(ev) {
        if(ev) {
            ev.preventDefault()
        }
        todo.innerHTML = ''
        inProgress.innerHTML = ''
        codeReview.innerHTML = ''
        done.innerHTML = ''

        const result = await fetch(BASE_URL)
        const data = await result.json()
        Object.values(data).forEach(task => {
            const li = createElement('li', null, null, null, ['task'])
            const h3 = createElement('h3', `${task.title}`, li)
            const p = createElement('p', `${task.description}`, li)

            const btn = createElement('button', null, li)
            btn.addEventListener('click', moveTasks)
            btn.id = task._id

            if (task.status === 'ToDo') {
                btn.textContent = 'Move to In Progress'
                todo.appendChild(li)
            }
            else if (task.status === 'In Progress') {
                btn.textContent = 'Move to Code Review'
                inProgress.appendChild(li)
            }
            else if (task.status === 'Code Review') {
                btn.textContent = 'Move to Done'
                codeReview.appendChild(li)
            }
            else {
                btn.textContent = 'Close'
                done.appendChild(li)
            }
        })
    }

    async function addTask(ev) {
        if (ev) {
            ev.preventDefault()
        }
        let headers = {
            method: 'POST',
            body: JSON.stringify({
                title: elementTitle.value,
                description: elementDesc.value,
                status: 'ToDo'
            })
        }
        await fetch(BASE_URL, headers)

        elementTitle.value = ''
        elementDesc.value = ''
        loadTasks()
    }

    async function moveTasks(ev) {
   
        let headers = {}
        let currentId = ev.target.id
        let status = ''

        if (ev.target.textContent !== 'Close') {
            if (ev.target.textContent === 'Move to In Progress') {
                status = 'In Progress'
            }
            else if (ev.target.textContent === 'Move to Code Review') {
                status = 'Code Review'
            }
            else if (ev.target.textContent === 'Move to Done') {
                status = 'Done'
            }
            headers =  {
                method: 'PATCH',
                body: JSON.stringify({
                    status
                })
            } 
            await fetch(`${BASE_URL}${currentId}`, headers)  
        }
        else {
            headers = { method: 'DELETE' }
            await fetch(`${BASE_URL}${currentId}`, headers)
            ev.target.parentNode.remove()
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