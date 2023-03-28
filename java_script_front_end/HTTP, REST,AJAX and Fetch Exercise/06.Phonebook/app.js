function attachEvents() {
    document.querySelector('#btnLoad').addEventListener('click', loadAccounts)
    document.querySelector('#btnCreate').addEventListener('click', createNewAccount)

    const phonebook = document.querySelector('#phonebook')
    phonebook.addEventListener('click', deleteAccount)
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook'



    async function loadAccounts() {
        phonebook.innerHTML = ''
        const res = await fetch(BASE_URL)
        const data = await res.json()

        for (let account of Object.values(data)) {
            const li = document.createElement('li')
            const btnDelete = document.createElement('button')
            btnDelete.textContent = 'Delete'
            btnDelete.id = account._id
            btnDelete.classList.add('delete')
            // btnDelete.addEventListener('click',deleteAccount)
            li.textContent = `${account.person}: ${account.phone}`
            li.appendChild(btnDelete)
            phonebook.appendChild(li)
        }

    }

    async function createNewAccount() {
        const person = document.querySelector('#person')
        const phone = document.querySelector('#phone')
        await fetch(BASE_URL, 
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person: person.value,
                phone: phone.value
            })
        })
        person.value = ''
        phone.value = ''
    }

    async function deleteAccount(ev) {
        if (ev.target.classList[0] === 'delete') {
            let id = ev.target.id
            ev.target.parentElement.remove()
   
            await fetch(`${BASE_URL}/${id}`, {
               method: 'delete'
            })
        }
       }    
}

attachEvents();


