function solve() {
   const task = document.querySelector('#task')
   const desc = document.querySelector('#description')
   const date = document.querySelector('#date')
   document.querySelector('#add').addEventListener('click', addTask)
   const open = document.querySelector('body > main > div > section:nth-child(2) > div:nth-child(2)')
   const progress = document.querySelector('#in-progress')
   const complete = document.querySelector('body > main > div > section:nth-child(4) > div:nth-child(2)')

   function addTask(ev) {
    ev.preventDefault()
    if (!task.value || !desc.value  || !date.value) {
        return
    }
     const article = document.createElement('article')
     article.innerHTML = `
     <h3>${task.value}</h3>
     <p>Description: ${desc.value}/p> 
     <p>Due Date: ${date.value}</p>
     <div class="flex">
        <button class="green">Start</button>
        <button class="red">Delete</button>
     </div>`

     btnStart = article.querySelector('button.green')
     btnDelete = article.querySelector('button.red')

     btnStart.addEventListener('click', startTask)
     btnDelete.addEventListener('click', deleteTask)
     open.appendChild(article)

     task.value = ''
     desc.value = ''
     date.value = ''

     function startTask() {
        progress.appendChild(article)
        const div = article.querySelector('article > div')
        div.innerHTML = `
        <button class="red">Delete</button>
        <button class="orange">Finish</button>
        `
        const btnFinish = article.querySelector('button.orange')
        btnFinish.addEventListener('click', finish)
        btnDelete = article.querySelector('button.red')
        btnDelete.addEventListener('click', deleteTask)

     }

     function deleteTask() {
        article.remove()
     }

     function finish() {
        complete.appendChild(article)
        const btnFinish = article.querySelector('button.orange')
        btnDelete.remove()
        btnFinish.remove()
     }
   }
}