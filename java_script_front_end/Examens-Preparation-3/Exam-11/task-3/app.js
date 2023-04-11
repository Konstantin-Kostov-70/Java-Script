function attachEvents() {
  const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('input')
  document.querySelector('#submit').addEventListener('click', addStudents)
  const tbody = document.querySelector('tbody')

  async function getInfo() {
    tbody.innerHTML = ''
    const res = await fetch('http://localhost:3030/jsonstore/collections/students')
    const data = await res.json()
   
    Object.values(data).forEach(obj => {
      const tr = createEl('tr', null, tbody)
      const tdF = createEl('td', obj.firstName, tr)
      const tdL = createEl('td', obj.lastName, tr)
      const tdN = createEl('td', obj.facultyNumber, tr)
      const tdG = createEl('td', obj.grade, tr)
    })
  }

  getInfo()

  async function addStudents(ev) {
    ev.preventDefault()
    let fname = firstName.value
    let lname = lastName.value
    let fNum = facultyNumber.value
    let grd = grade.value
    if (!fname || !lname || !fNum || !grd) {
      return
    }
    Array.from(document.querySelectorAll('input')).forEach(el => el.value = '')

    await fetch('http://localhost:3030/jsonstore/collections/students', {
      method: 'POST',
      body: JSON.stringify({
        firstName: fname,
        lastName: lname,
        facultyNumber: fNum,
        grade: grd
      })
    })
    getInfo()
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
      element.classList.add(..._class)
    }
    if (attributes) {
      for (key in attributes) {
        element.setAttribute(key, attributes[key])
      }
    }
    return element
  }

}

attachEvents();