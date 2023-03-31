window.addEventListener('load', solve);

function solve() {

    let data = {
        firstName: '',
        lastName: '',
        dateIn: '',
        dateOut: '',
        peopleCount: ''
    }

    const firstName = document.querySelector('#first-name')
    const lastName = document.querySelector('#last-name')
    const dateIn = document.querySelector('#date-in')
    const dateOut = document.querySelector('#date-out')
    const peopleCount = document.querySelector('#people-count')
    const btnSubmit = document.querySelector('#next-btn')
    const confirmList = document.querySelector('#confirm-reservations > div > div > ul')
    const ulInfo = document.querySelector('#info-reservations > div > div > ul')
    const verification = document.querySelector('#verification')

    btnSubmit.addEventListener('click', addInfo)

    ulInfo.addEventListener('click', editReservation)
    ulInfo.addEventListener('click', continueReservation)

    confirmList.addEventListener('click', confirmReservation)
    confirmList.addEventListener('click', cancelReservation)


    function addInfo(ev) {
        ev.preventDefault()
        if (!firstName.value || !lastName.value || !dateIn.value || !dateOut.value || !peopleCount.value) {
            return
        }
        ulInfo.innerHTML = `
        <li class="reservation-content">
            <article>
               <h3>Name: ${firstName.value} ${lastName.value}</h3>
               <p>From date: ${dateIn.value}</p> 
               <p>To date: ${dateOut.value}</p> 
               <p>For ${peopleCount.value} people</p>
            </article>
            <button class="edit-btn">Edit</button>
            <button class="continue-btn">Continue</button> 
        </li>`

        data.firstName = firstName.value
        data.lastName = lastName.value
        data.dateIn = dateIn.value
        data.dateOut = dateOut.value
        data.peopleCount = peopleCount.value

        firstName.value = ''
        lastName.value = ''
        dateIn.value = ''
        dateOut.value = ''
        peopleCount.value = ''

        btnSubmit.disabled = true

    }

    function editReservation(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Edit') {
            firstName.value = data.firstName
            lastName.value = data.lastName
            dateIn.value = data.dateIn
            dateOut.value = data.dateOut
            peopleCount.value = data.peopleCount

            btnSubmit.disabled = false
            ulInfo.innerHTML = ''
        }
    }

    function continueReservation(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Continue') {
            confirmList.innerHTML =`
            <li class="reservation-content">
               <article>
                  <h3>Name: ${data.firstName} ${data.lastName}</h3>
                  <p>From date: ${data.dateIn}</p> 
                  <p>To date: ${data.dateOut}</p> 
                  <p>For ${data.peopleCount} people</p>
               </article>
               <button class="confirm-btn">Confirm</button>
               <button class="cancel-btn">Cancel</button> 
            </li>
            `
            ulInfo.innerHTML = ''
        }

    }

    function confirmReservation(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Confirm') {
            btnSubmit.disabled = false
            confirmList.innerHTML = ''
            verification.textContent = 'Confirmed.'
            verification.classList.add('reservation-confirmed')
        }
    }

    function cancelReservation(ev) {
        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Cancel') {
            btnSubmit.disabled = false
            confirmList.innerHTML = ''
            verification.textContent = 'Cancelled.'
            verification.classList.add('reservation-cancelled')
        }
    }
}







