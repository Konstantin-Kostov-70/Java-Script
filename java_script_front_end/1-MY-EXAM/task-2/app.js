window.addEventListener('load', solve);

function solve() {
    const form = document.querySelector('#create-task-form')
    const titleEl = document.querySelector('#title')
    const descriptionEl = document.querySelector('#description')
    const labelEl = document.querySelector('#label')
    const estimationPointsEl = document.querySelector('#points')
    const assigneeEl = document.querySelector('#assignee')

    const createBtn = document.querySelector('#create-task-btn')
    const deleteTaskBtn = document.querySelector('#delete-task-btn')
    createBtn.addEventListener('click', onCreate)
    deleteTaskBtn.addEventListener('click', onDeleteTask)

    const sectionTasks = document.querySelector('#tasks-section')
    const pointsEl = document.querySelector('#total-sprint-points')
    const hiddenInput = document.querySelector('#task-id')
    let totalPoints = 0
    let counter = 0

    function onCreate(ev) {
        ev.preventDefault()
        
        let title = titleEl.value
        let description = descriptionEl.value
        let label = labelEl.value
        let estimatedPoints = estimationPointsEl.value
        let assignee = assigneeEl.value
        
        if (!title || !description || !label || !estimatedPoints || !assignee) {
            return
        }
        
        counter ++
        let allTasks = []
        let id = `task-${counter}`

        allTasks.push({
            id,
            title,
            description,
            label,
            estimatedPoints,
            assignee
        })

        totalPoints += Number(estimationPointsEl.value)
        pointsEl.textContent = `Total Points ${totalPoints}pts`
        let _class = ''
        let icon = ''

        if (label === 'Feature') {
            _class = 'feature'
            icon = '&#8865;'
        }
        else if (label === 'Low Priority Bug') {
            _class = "low-priority"
            icon = '&#9737;'
        }
        else if (label === 'High Priority Bug') {
            _class = "high-priority"
            icon = '&#9888;'
        }

        const article = document.createElement('article')
        article.className = 'task-card'
        article.id = id
        article.innerHTML = `
             <div class="task-card-label ${_class}">${label} ${icon}</div>
             <h3 class="task-card-title">${title}</h3> 
             <p class="task-card-description">${description}</p>
             <div class="task-card-points">Estimated at ${estimatedPoints} pts</div>
             <div class="task-card-assignee">Assigned to: ${assignee}</div> 
             <div class="task-card-actions">
                 <button>Delete</button>
             </div>`
        const smallDeleteBtn = article.querySelector('button')
        smallDeleteBtn.addEventListener('click', backToForm)
        sectionTasks.appendChild(article)

        form.reset()

        function backToForm(ev) {

            let parent = ev.target.parentNode.parentNode
            hiddenInput.value = parent.id
            deleteTaskBtn.disabled = false
            createBtn.disabled = true

            let task = allTasks.find(task => task.id === parent.id)

            titleEl.value = task.title
            descriptionEl.value = task.description
            labelEl.value = task.label
            estimationPointsEl.value = task.estimatedPoints
            assigneeEl.value = task.assignee


            titleEl.disabled = true
            descriptionEl.disabled = true
            estimationPointsEl.disabled = true
            assigneeEl.disabled = true
            labelEl.disabled = true

        }
    }

    function onDeleteTask() {
       
        totalPoints -= Number(estimationPointsEl.value)
        pointsEl.textContent = `Total Points ${totalPoints}pts`

        document.querySelector(`#${hiddenInput.value}`).remove()

        titleEl.disabled = false
        descriptionEl.disabled = false
        estimationPointsEl.disabled = false
        assigneeEl.disabled = false
        labelEl.disabled = false

        form.reset()

        createBtn.disabled = false
        deleteTaskBtn.disabled = true
    }
}

