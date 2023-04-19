window.addEventListener("load", solve);

function solve() {
  const elementFirstName = document.querySelector('#first-name')
  const elementLastName = document.querySelector('#last-name')
  const elementAge = document.querySelector('#age')
  const elementTitle = document.querySelector('#story-title')
  const elementGenre = document.querySelector('#genre')
  const elementStory = document.querySelector('#story')
  const form = document.querySelector('form')
  const preview = document.querySelector('#preview-list')
  const main = document.querySelector('#main')

  const btnPublish = document.querySelector('#form-btn')
  btnPublish.addEventListener('click', publish)

  function publish() {
    const firstName = elementFirstName.value
    const lastName = elementLastName.value
    const age = elementAge.value
    const title = elementTitle.value
    const genre = elementGenre.value
    const story = elementStory.value

    if (!firstName || !lastName || !age || !title || !genre || !story) {
      return
    }
    form.reset()
    const li = document.createElement('li')
    li.className = 'story-info'
    li.innerHTML = `
    <article>
    <h4>Name: ${firstName} ${lastName}</h4> 
    <p>Age: ${age}</p>
    <p>Title: ${title}</p>
    <p>Genre: ${genre}</p> 
    <p>${story}</p>
    </article>
    <button class="save-btn">Save Story</button> 
    <button class="edit-btn">Edit Story</button>
    <button class="delete-btn">Delete Story</button>`

    const btnSave = li.querySelector('button.save-btn')
    const btnEdit = li.querySelector('button.edit-btn')
    const btnDelete = li.querySelector('button.delete-btn')

    btnSave.addEventListener('click', saveTask)
    btnEdit.addEventListener('click', editTask)
    btnDelete.addEventListener('click', deleteTask)

    preview.appendChild(li)

    btnPublish.disabled = true

    function saveTask() {
      main.innerHTML = ''
      const h1 = document.createElement('h1')
      h1.textContent = "Your scary story is saved!"
      main.appendChild(h1)
    }

    function editTask() {
      elementFirstName.value = firstName
      elementLastName.value = lastName
      elementAge.value = age
      elementTitle.value = title
      elementGenre.value = genre
      elementStory.value = story

      preview.removeChild(li)
      btnPublish.disabled = false
    }

    function deleteTask() {
      preview.removeChild(li)
      btnPublish.disabled = false
    }
  }

}
