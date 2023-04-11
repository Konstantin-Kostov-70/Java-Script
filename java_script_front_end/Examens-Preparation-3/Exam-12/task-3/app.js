function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/'
  const [bookTitle, bookAuthor] = document.querySelectorAll('input')
  const btnSubmit = document.querySelector('#form > button')
  btnSubmit.addEventListener('click', addBook)
  document.querySelector('#loadBooks').addEventListener('click', loadBook)
  const tbody = document.querySelector('tbody')
 
  const formTitle = document.querySelector('#form > h3')

  async function loadBook() {
    tbody.innerHTML = ''

    const res = await fetch(BASE_URL)
    const data = await res.json()
    for (let key in data) {
      const tr = createElement('tr', null, tbody, key)
      const tdTitles = createElement('td', data[key]['title'], tr)
      const tdAuthor = createElement('td', data[key]['author'], tr)
      const tdButtons = createElement('td', null, tr)
      const btnEdit = createElement('button', 'Edit', tdButtons)
      const btnDelete = createElement('button', 'Delete', tdButtons)

      btnDelete.addEventListener('click', deleteBook)
      btnEdit.addEventListener('click', editForm)

    }
  }

  async function addBook() {
    let title = bookTitle.value
    let author = bookAuthor.value

    if (!title || !author) {
      return
    }

    await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify({
        title,
        author
      })
    })
    bookTitle.value = ''
    bookAuthor.value = ''
    loadBook()
  }

  async function editForm(ev) {

    let title = ev.target.parentNode.parentNode.querySelector('td:nth-child(1)').textContent
    let author = ev.target.parentNode.parentNode.querySelector('td:nth-child(2)').textContent
    let id = ev.target.parentNode.parentNode.id
   
    bookTitle.value = title
    bookAuthor.value = author
    formTitle.textContent = 'EditFORM'
    btnSubmit.textContent = 'Save'
    btnSubmit.removeEventListener('click', addBook)
    btnSubmit.addEventListener('click', editBook)

    async function editBook() {
      await fetch(`${BASE_URL}${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: bookTitle.value,
          author: bookAuthor.value
        })
      })
      formTitle.textContent = 'FORM'
      btnSubmit.textContent = 'Submit'
      btnSubmit.removeEventListener('click', editBook)
      btnSubmit.addEventListener('click', addBook)

      bookTitle.value = ''
      bookAuthor.value = '' 
      loadBook() 
    }

  }

  async function deleteBook(ev) {
    let id = ev.target.parentNode.parentNode.id
    await fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
    })

    ev.target.parentNode.parentNode.remove()
  }

  function createElement(tag, text, parent, _id, _class, attributes) {
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