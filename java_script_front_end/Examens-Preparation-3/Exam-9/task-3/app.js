function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/messenger'

    const textArea = document.querySelector('#messages')
    const name = document.querySelector('input[name=author]')
    const text = document.querySelector('input[name=content]')
    document.querySelector('#submit').addEventListener('click', send)
    document.querySelector('#refresh').addEventListener('click', getAllMsg)

    async function send() {
        let author = name.value
        let content = text.value

        if (!author || !content) {
            return
        }
        await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                author,
                content
            })
        })
        name.value = ''
        text.value = ''
    }

    async function getAllMsg() {
        textArea.value = ''
        const res = await fetch(BASE_URL)
        const data = await res.json()

        renderMsg(data)
    }

    function renderMsg(data) {
        let content = Object.values(data)
        .map(msg => `${msg.author}: ${msg.content}`).join('\n')
        textArea.value = content
    }
}

attachEvents();