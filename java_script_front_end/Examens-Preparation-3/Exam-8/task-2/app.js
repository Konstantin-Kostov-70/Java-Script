function solve() {
    const inputs = {
        firstName: document.querySelector('#fname'),
        lastName: document.querySelector('#lname'),
        email: document.querySelector('#email'),
        dateOfBirth: document.querySelector('#birth'),
        position: document.querySelector('#position'),
        salary: document.querySelector('#salary'),
    }

    document.querySelector('#add-worker').addEventListener('click', addWorker)
    let sum = document.querySelector('#sum')
    let currentSum = 0

    function addWorker(ev) {
        ev.preventDefault()

        const tbody = document.querySelector('#tbody')

        let firstName = inputs.firstName.value
        let lastName = inputs.lastName.value
        let email = inputs.email.value
        let dateOfBirth = inputs.dateOfBirth.value
        let position = inputs.position.value
        let salary = inputs.salary.value

        if (!firstName || !lastName || !email || !dateOfBirth || !position || !salary) {
            return
        }
        const tr = document.createElement('tr')
        tr.innerHTML = `
       <td>${firstName}</td>
       <td>${lastName}</td>
       <td>${email}</td>
       <td>${dateOfBirth}</td>
       <td>${position}</td>
       <td>${salary}</td>
       <td><button class='fired'>Fired</button> 
       <button class="edit">Edit</button> </td>`

        tr.querySelector('td:nth-child(7) > button.fired').addEventListener('click', fired)
        tr.querySelector('td:nth-child(7) > button.edit').addEventListener('click', edit)

        tbody.appendChild(tr)

        currentSum += Number(salary)
        sum.textContent = currentSum.toFixed(2)

        Object.values(inputs).forEach(el => el.value = '')

        function fired() {
            currentSum -= Number(salary)
            sum.textContent = currentSum.toFixed(2)
            tr.remove()
        }

        function edit() {

            inputs.firstName.value = firstName
            inputs.lastName.value = lastName
            inputs.email.value = email
            inputs.dateOfBirth.value = dateOfBirth
            inputs.position.value = position
            inputs.salary.value = salary

            currentSum -= Number(salary)
            sum.textContent = currentSum.toFixed(2)
            tr.remove()
        }
    }
}
solve()