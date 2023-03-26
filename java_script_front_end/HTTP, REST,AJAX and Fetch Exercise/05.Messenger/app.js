function attachEvents() {
    document.querySelector('#refresh').addEventListener('click', getAllMsg)
    document.querySelector('#submit').addEventListener('click', sendMsg)

    function sendMsg() {
        const author = document.querySelector('input[name=author]')
        const content = document.querySelector('input[name=content]')

        if (author.value !== '' && content.value !== '') {
            let body = {
                author: author.value,
                content: content.value
            }
    
            author.value = ''
            content.value = ''
            createMsg(body)
        }
    }

    async function createMsg(body) {
        const BASE_URL = 'http://localhost:3030/jsonstore/messenger'
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    }

    async function getAllMsg() {
        const BASE_URL = 'http://localhost:3030/jsonstore/messenger'

        const res = await fetch(BASE_URL)
        const data = await res.json()

        renderMsg(data)
    }

    function renderMsg(data) {
        const textArea = document.querySelector('#messages')
        content = Object.values(data)
        .map(obj => `${obj.author}: ${obj.content}`)
        .join('\n')
        textArea.textContent = content
    }
}

attachEvents();
