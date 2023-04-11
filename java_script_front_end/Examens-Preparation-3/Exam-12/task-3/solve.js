function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/books'
    const formTitle = document.querySelector('#form > h3')
  
    const title = document.querySelector('input[name=title]')
    const author = document.querySelector('input[name=author]')
  
    const btnLoad = document.querySelector('#loadBooks')
    btnLoad.addEventListener('click', loadBook)
  
    btnSubmit = document.querySelector('#form > button')
    btnSubmit.addEventListener('click', addBook)
  
    const table = document.querySelector('body > table')
    table.addEventListener('click', editForm)
    table.addEventListener('click', deleteBook)
  
    async function loadBook() {
      const tbody = document.querySelector('body > table > tbody')
      tbody.innerHTML = ''
  
      const res = await fetch(BASE_URL)
      const data = await res.json()
      Object.entries(data).forEach(([key, value]) => {
  
        const tr = document.createElement('tr')
        tr.innerHTML = `
          <td>${value.title}</td>
          <td>${value.author}</td>
          <td id=${key}>
            <button>Edit</button>
            <button>Delete</button>
          </td>`
        tbody.appendChild(tr)
      })
    }
  
    async function addBook() {
      if (title.value === '' || author.value === '') {
        return
      }
      await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          author: author.value,
          title: title.value
        })
      })
  
      title.value = ''
      author.value = ''
      loadBook()
    }
  
    async function editForm(ev) {
      if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Edit') {
        let id = ev.target.parentElement.id
        formTitle.textContent = 'Edit FORM'
        btnSubmit.textContent = 'Save'
        btnSubmit.removeEventListener('click', addBook)
        btnSubmit.addEventListener('click', editBook)
        btnSubmit.id = id
  
        title.value = ev
        .target
        .parentElement
        .parentElement
        .querySelector('td:nth-child(1)')
        .textContent
  
        author.value = ev
        .target
        .parentElement
        .parentElement
        .querySelector('td:nth-child(2)')
        .textContent
      }
    }
  
    async function editBook(ev) {
      if (title.value === '' || author.value === '') {
        return
      }
      let id = ev.target.id
      await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          author: author.value,
          title: title.value
        })
      })
      formTitle.textContent = 'FORM'
      btnSubmit.textContent = 'Submit'
      btnSubmit.removeEventListener('click', editBook)
      btnSubmit.addEventListener('click', addBook)
      btnSubmit.removeAttribute('id')
      title.value = ''
      author.value = ''
      loadBook()
    }
  
    async function deleteBook(ev) {
      if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Delete') {
        let id = ev.target.parentElement.id
  
        await fetch(`${BASE_URL}/${id}`, {
          method: 'DELETE',
        })
        ev.target.parentElement.parentElement.remove()
      }
    }
  }
  
  attachEvents();