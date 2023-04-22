function solve() {
    
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const form = document.querySelector('form')
    const elementTitle = document.querySelector('#course-name')
    const elementType = document.querySelector('#course-type')
    const elementDesc = document.querySelector('#description')
    const elementName = document.querySelector('#teacher-name')

    const btnAdd = document.querySelector('#add-course')
    const btnEdit = document.querySelector('#edit-course')
    const btnLoad = document.querySelector('#load-course')


    btnAdd.addEventListener('click', add)
    btnEdit.addEventListener('click', edit)
    btnLoad.addEventListener('click', loadTask)

    const list = document.querySelector('#list')
    let currentId = ''

    async function add(ev) {
        if(ev) {
            ev.preventDefault()
        }
        let headers = {
            method: 'POST',
            body: JSON.stringify({
                title: elementTitle.value,
                type: elementType.value,
                description: elementDesc.value,
                teacher:elementName.value
            })
        }
        await fetch(BASE_URL, headers)
        form.reset()
        loadTask()
    }

    async function edit(ev) {
       if (ev) {
        ev.preventDefault()
       }
      
       let headers = {
        method: 'PUT',
        body: JSON.stringify({
            title: elementTitle.value,
            type: elementType.value,
            description: elementDesc.value,
            teacher:elementName.value,
            _id: currentId
        })
       }
       await fetch(`${BASE_URL}${currentId}`, headers)
       form.reset()
       btnAdd.disabled = false
       btnEdit.disabled = true
       loadTask()
    }

    async function loadTask() {
        list.innerHTML = ''
        const result = await fetch(BASE_URL)
        const data = await result.json()
       
        Object.values(data).forEach(obj => {
            let { title, type, description, teacher, _id } = obj
            const divElement = createElement('div', null, list, _id, ['container'])
            const h2 = createElement('h2', title, divElement)
            const h3Name = createElement('h3', teacher, divElement)
            const h3Type = createElement('h3', type, divElement)
            const h4 = createElement('h4', description, divElement)
            const btnEditForm = createElement('button', 'Edit Course', divElement, null, ['edit-btn'])
            const btnFinish = createElement('button', 'Finish Course', divElement, null, ['finish-btn'])

            btnEditForm.addEventListener('click', backToForm)
            btnFinish.addEventListener('click', finish)
            list.appendChild(divElement)
        });
    }

    function backToForm(ev) {
        let parent = ev.target.parentNode
        currentId = parent.id
       
        let titleText = parent.querySelector('h2').textContent
        let nameText = parent.querySelector('h3:nth-child(2)').textContent
        let typeText = parent.querySelector('h3:nth-child(3)').textContent
        let descText = parent.querySelector('h4').textContent

        elementTitle.value = titleText
        elementType.value = typeText
        elementDesc.value = descText
        elementName.value = nameText

        btnEdit.disabled = false
        btnAdd.disabled = true
        parent.remove()
    }

    async function finish(ev) {
        let id = ev.target.parentNode.id
        await fetch(`${BASE_URL}${id}`, {
            method: 'DELETE'
        })
        ev.target.parentNode.remove()
        loadTask()
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