function attachEvents() {
    const postURL = 'http://localhost:3030/jsonstore/blog/posts'
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments'

    document.querySelector('#btnLoadPosts').addEventListener('click', load)
    document.querySelector('#btnViewPost').addEventListener('click', view)
    
    const select = document.querySelector('#posts')
    const postTitle = document.querySelector('#post-title')
    const postBody = document.querySelector('#post-body')
    const container = document.querySelector('#post-comments')
    let content = []
    let currentId = ''

    async function load() {
        const result = await fetch(postURL)
        const data = await result.json()

        createOption(data)
    }

    async function view() {
        container.innerHTML = ''
        const result = await fetch(commentsURL)
        const data = await result.json()

        createBody()
        createComments(data, currentId)

    }

    function createOption(data) {
         
        Object.entries(data).forEach(([key, value]) => {

            const option = document.createElement('option')
            option.value = key
            option.textContent = value.title
            select.appendChild(option)

            content.push({
                id: key,
                body:value.body
            })
        })
    }

    function createBody() {
        let currentOption = Array
        .from(select.children)
        .find(option => option.selected)

        currentId = currentOption.value
        postTitle.textContent = currentOption.textContent
        postBody.textContent = content.find(obj => obj.id === currentId).body
        
    }

    function createComments(data, id) {

        Object.values(data)
        .filter(obj => obj.postId === id)
        .forEach(obj => {
            const li = document.createElement('li')
            li.textContent = obj.text
            container.appendChild(li)
        })

        

    }









}

attachEvents();