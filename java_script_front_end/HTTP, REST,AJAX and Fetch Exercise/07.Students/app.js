async function attachEvents() {
  document.querySelector('#submit').addEventListener('click', addToForm)
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/students'

  const res = await fetch(BASE_URL)
  const students = await res.json()
  for (const student of Object.values(students)) {
    loadStudents(student)
  }


  async function addToForm(ev) {
    const firstName = document.querySelector('input[name="firstName"]')
    const lastName = document.querySelector('input[name="lastName"]')
    const facultyNumber = document.querySelector('input[name="facultyNumber"]')
    const grade = document.querySelector('input[name="grade"]')

    if (firstName.value === ''
      || lastName.value === ''
      || facultyNumber.value === ''
      || grade.value === '') {
      return
    }

    let student = {
      firstName: firstName.value,
      lastName: lastName.value,
      facultyNumber: facultyNumber.value,
      grade: grade.value
    }
    
    await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    })

    loadStudents(student)

    firstName.value = ''
    lastName.value = ''
    facultyNumber.value = ''
    grade.value = ''

  }

  function loadStudents(student) {
    const tbody = document.querySelector('#results > tbody')
    const tr = document.createElement('tr')

    tr.innerHTML = `
          <td>${student.firstName}</td>
          <td>${student.lastName}</td>
          <td>${student.facultyNumber}</td>
          <td>${student.grade}</td>`
    tbody.appendChild(tr)

  }
}

attachEvents();