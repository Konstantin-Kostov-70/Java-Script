window.addEventListener("load", solve);

function solve() {
    const form = document.querySelector('form')
    const elementTitle = document.querySelector('#task-title')
    const elementCategory = document.querySelector('#task-category')
    const elementText = document.querySelector('#task-content')
    const btnPublish = document.querySelector('#publish-btn')
    btnPublish.addEventListener('click', publish)
    const review = document.querySelector('#review-list')
    const publishedList = document.querySelector('#published-list')

    function publish() {

        let title = elementTitle.value
        let category = elementCategory.value
        let text = elementText.value

        if (!title || !category || !text) {
            return
        }
        let li = document.createElement('li')
        li.className = 'rpost'
        li.innerHTML = `
            <article>
                <h4>${title}</h4>
                <p>Category: ${category}</p>
                <p>Content: ${text}</p>
            </article>
            <button class="action-btn edit">Edit</button>
            <button class="action-btn post">Post</button>`

        let btnEdit = li.querySelector('button.edit')
        let btnPost = li.querySelector('button.post')

        btnEdit.addEventListener('click', edit)
        btnPost.addEventListener('click', post)

        review.appendChild(li)
        form.reset()

        function edit(ev) {
            let titleText = ev.target.parentNode.querySelector('article > h4').textContent
            let categoryText = ev.target.parentNode.querySelector('article > p:nth-child(2)').textContent.split(': ')[1]
            let contentText = ev.target.parentNode.querySelector('article > p:nth-child(3)').textContent.split(': ')[1]

            elementTitle.value = titleText
            elementCategory.value = categoryText
            elementText.value = contentText

            ev.target.parentNode.remove()

        }

        function post(ev) {
            publishedList.appendChild(ev.target.parentNode)
            ev.target.parentNode.querySelector('button.edit').remove()
            ev.target.parentNode.querySelector('button.post').remove()
          
        }
    }
}