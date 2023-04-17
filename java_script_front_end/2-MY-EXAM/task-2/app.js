window.addEventListener('load', solve);

function solve() {
    const section = document.querySelector('#tasks-section')
    const form = document.querySelector('#create-task-form')
    const elementTitle = document.querySelector('#title')
    const elementDesc = document.querySelector('#description')
    const elementLabel = document.querySelector('#label')
    const elementPoints = document.querySelector('#points')
    const elementAssignee = document.querySelector('#assignee')

    const btnCreate = document.querySelector('#create-task-btn')
    btnCreate.addEventListener('click', createTask)
    const btnDelete = document.querySelector('#delete-task-btn')
    btnDelete.addEventListener('click', deleteTask)

    const hiddenId = document.querySelector('#task-id')
    const totalPoints = document.querySelector('#total-sprint-points')

    let counter = 0
    let total = 0

    function createTask() {
        counter++
        let id = `task-${counter}`

        let title = elementTitle.value
        let desc = elementDesc.value
        let label = elementLabel.value
        let points = Number(elementPoints.value)
        let assignee = elementAssignee.value

        let allValues = []

        if (!title || !desc || !label || !points || !assignee) {
            return
        }
        allValues.push({
            title,
            desc,
            label,
            points,
            assignee,
            id
        })

        let classWord = ''
        let icon = ''

        switch (label) {
            case 'Feature':
                classWord = 'feature'
                icon = '&#8865;'
                break;

            case 'Low Priority Bug':
                classWord = 'low-priority'
                icon = '&#9737;'
                break;

            default:
                classWord = 'high-priority'
                icon = '&#9888;'
                break;
        }


        let article = document.createElement('article')
        article.id = id
        article.className = 'task-card'
        article.innerHTML = `
       <div class="task-card-label ${classWord}">${label} ${icon}</div>
       <h3 class="task-card-title">${title}</h3> 
       <p class="task-card-description">${desc}</p>
       <div class="task-card-points">Estimated at ${points} pts</div>
       <div class="task-card-assignee">Assigned to: ${assignee}</div> 
       <div class="task-card-actions">
          <button>Delete</button>
       </div>`

        let btn = article.querySelector('button')
        btn.addEventListener('click', backToForm)

        section.appendChild(article)
        form.reset()

        total += points
        totalPoints.textContent = `Total Points ${total}pts`

        function backToForm(ev) {
            hiddenId.value = ev.target.parentNode.parentNode.id
            btnDelete.disabled = false
            btnCreate.disabled = true

            let currentObj = allValues.find(obj => obj.id === hiddenId.value)

            elementTitle.value = currentObj.title
            elementDesc.value = currentObj.desc
            elementLabel.value = currentObj.label
            elementPoints.value = currentObj.points
            elementAssignee.value = currentObj.assignee

            elementTitle.disabled = true
            elementDesc.disabled = true
            elementLabel.disabled = true
            elementPoints.disabled = true
            elementAssignee.disabled = true

            total -= currentObj.points
            totalPoints.textContent = `Total Points ${total}pts`

        }

    }

    function deleteTask() {
        document.querySelector(`#${hiddenId.value}`).remove()
        form.reset()

        elementTitle.disabled = false
        elementDesc.disabled = false
        elementLabel.disabled = false
        elementPoints.disabled = false
        elementAssignee.disabled = false

        btnCreate.disabled = false
        btnDelete.disabled = true
    }
}