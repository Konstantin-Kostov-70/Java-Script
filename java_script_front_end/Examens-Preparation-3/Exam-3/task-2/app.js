window.addEventListener('load', solve);

function solve() {

    const main = document.querySelector('#main')
    const body = document.querySelector('#body')

    const ticketPreview = document.querySelector('.ticket-info-list')
    ticketPreview.addEventListener('click', editTicket)
    ticketPreview.addEventListener('click', addToConfirm)

    const ticketConfirm = document.querySelector('.confirm-ticket')
    ticketConfirm.addEventListener('click', confirmTicket)
    ticketConfirm.addEventListener('click', cancelTicket)

    const btnNext = document.querySelector('#next-btn')
    btnNext.addEventListener('click', addToPreview)

    let allInputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        people: document.getElementById('people-count'),
        date: document.getElementById('from-date'),
        days: document.getElementById('days-count'),
    }

    let ticketInfo = {}

    function addToPreview(ev) {
        ev.preventDefault();
        let isNotEmpty = Object.values(allInputs).every(el => el.value !== '')
        if(isNotEmpty) {

            const {firstName, lastName, people, date, days} = allInputs
            ticketInfo = {
               firstName: firstName.value,
               lastName: lastName.value,
               people: people.value,
               date: date.value,
               days: days.value
            }

            ticketPreview.innerHTML = `
            <li class="ticket">
                <article>
                <h3>Name: ${firstName.value} ${lastName.value}</h3>
                <p>From date: ${date.value}</p>
                <p>For ${days.value} days</p>
                <p>For ${people.value} people</p>
                </article>
                <button class="edit-btn">Edit</button>
                <button class="continue-btn">Continue</button>
            </li>`
            Object.values(allInputs).forEach(el => el.value = '')
            btnNext.disabled = true
        }
    }

    function editTicket(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Edit') {
            for(key in ticketInfo) {
                allInputs[key].value = ticketInfo[key]
            }
            ev.target.parentNode.remove()
            btnNext.disabled = false
        }
    }


    function addToConfirm(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Continue') {
            ticketConfirm.innerHTML = `
            <li class="ticket">
            <article>
            <h3>Name: ${ticketInfo.firstName} ${ticketInfo.lastName}</h3>
            <p>From date: ${ticketInfo.date}</p>
            <p>For ${ticketInfo.days} days</p>
            <p>For ${ticketInfo.people} people</p>
            </article>
            <button class="confirm-btn">Confirm</button>
            <button class="cancel-btn">Cancel</button>
        </li>`

           ev.target.parentNode.remove() 
        }
    }

    function confirmTicket(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Confirm') {
            main.remove()  
            const h1 = createEl ('h1', 'Thank you, have a nice day!', body, 'thank-you')
            const btnBack = createEl ('button', 'Back', body, 'back-btn')
            btnBack.onclick = () => {
                location.reload()
            }
        }
    }

    function cancelTicket(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Cancel') {
           ev.target.parentNode.remove()
           btnNext.disabled = false
        }
    }

    function createEl(tag, text, parent, _id, _class, attributes) {
        let element = document.createElement(tag)

        if (text) {
            if (tag === 'input' || tag === 'textarea') {
                element.value = text
            }
            else {
                element.textContent = text
            }
        }
        if (parent) {
            parent.appendChild(element)
        }
        if (_id) {
            element.id = _id
        }
        if (_class) {
            element.classList.add(_class)
        }
        if (attributes) {
            for (key in attributes) {
                element.setAttribute(key, attributes[key])
            }
        }
        return element
    }
}


    
    
