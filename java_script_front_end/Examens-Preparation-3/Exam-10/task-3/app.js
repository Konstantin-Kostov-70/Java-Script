function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/'

    document.querySelector('#btnLoad').addEventListener('click', load)
    document.querySelector('#btnCreate').addEventListener('click', create)

    const phonebook = document.querySelector('#phonebook')
    const person = document.querySelector('#person')
    const phone = document.querySelector('#phone')

    async function load() {
        phonebook.innerHTML = ''
        const res = await fetch(BASE_URL)
        const data = await res.json()
        Object.values(data).forEach(obj => {
            let li = document.createElement('li')
            li.textContent = `${obj.person}: ${obj.phone}`
            li.id = obj._id
            let btnDelete = document.createElement('button')
            btnDelete.textContent = 'Delete'
            btnDelete.addEventListener('click', delContact)
            li.appendChild(btnDelete)
            phonebook.appendChild(li)

        })
    }

    async function delContact(ev) {
        let id = ev.target.parentNode.id
        console.log(id)
        await fetch(`${BASE_URL}${id}`, {
            method: 'DELETE',
        })

        ev.target.parentNode.remove()
    }

    async function create() {
        let name = person.value
        let num = phone.value
        if (!name || !num) {
            return
        }

        await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({
                person: name,
                phone: num
            })
        })
        person.value = ''
        phone.value = ''

        load()
    }
}

attachEvents();