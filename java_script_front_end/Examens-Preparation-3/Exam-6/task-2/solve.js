// window.addEventListener("load", solve);

function solve() {
    const input = {
        title: document.querySelector('#post-title'),
        category: document.querySelector('#post-category'),
        content: document.querySelector('#post-content')
      }

    const lists = {
        review: document.querySelector('#review-list'),
        published: document.querySelector('#published-list')
    }

    document.querySelector('#publish-btn').addEventListener('click', publish)
    document.querySelector('#clear-btn').addEventListener('click', clear)


    function publish(ev) {
        ev.preventDefault()
        let title = input.title.value
        let category = input.category.value
        let content = input.content.value

        if (title == '' || category == '' || content == '') {
            return
        }
        const li = document.createElement('li')
        li.className = 'rpost'
        li.innerHTML = `<article>
        <h4>${title}</h4>
        <p>Category: ${category}</p>
        <p>Content: ${content}</p> 
        </article>
        <button class="action-btn edit">Edit</button>
        <button class="action-btn approve">Approve</button>`

        const editBtn = li.querySelector('.edit')
        editBtn.addEventListener('click', edit)

        const approveBtn = li.querySelector('.approve')
        approveBtn.addEventListener('click', approve)

        lists.review.appendChild(li)

        input.title.value = ''
        input.category.value = ''
        input.content.value = ''

        function edit() {
            input.title.value = title
            input.category.value = category
            input.content.value = content
            li.remove()
        }

        function approve() {
          lists.published.appendChild(li)
          editBtn.remove()
          approveBtn.remove()
        }
    }

    function clear() {
        lists.published.innerHTML = ''
    }
}