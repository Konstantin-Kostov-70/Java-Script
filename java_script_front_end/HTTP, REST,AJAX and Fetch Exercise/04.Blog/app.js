function attachEvents() {
    document.querySelector('#btnLoadPosts').addEventListener('click', load)
    document.querySelector('#btnViewPost').addEventListener('click', view)

    const select = document.querySelector('#posts')
    const postTitle = document.querySelector('#post-title')
    const postBody = document.querySelector('#post-body')
    const container = document.querySelector('#post-comments')
    const content = []


    async function load() {
        const res = await fetch('http://localhost:3030/jsonstore/blog/posts')
        const data = await res.json()

        createOptions(data)
    }

    async function view() {
        container.innerHTML = ''
        const res = await fetch('http://localhost:3030/jsonstore/blog/comments')
        const data = await res.json()

        let option = Array
        .from(select.querySelectorAll('option'))
        .filter(opt => opt.selected)[0]

        postTitle.textContent = option.textContent
        
        content.forEach(obj => {
            if (obj.id === option.value) {
                postBody.textContent = obj.body
            }
        })
          
        createComments(data, option)
    }

    function createOptions(data) {
        Object
        .entries(data)
        .forEach(([key, value]) => {
            let option = document.createElement('option')
            option.value = key
            option.textContent = value.title
            select.appendChild(option)

            content.push({
                id: key,
                body: value.body
            })
        })
    }

    function createComments(data, option) {

        Object
        .values(data)
        .forEach(obj => {
            if (obj.postId === option.value) {
                let li = document.createElement('li')
                li.textContent = obj.text
                container.appendChild(li)
            }
        })
    }
}

attachEvents();

