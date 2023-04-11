window.addEventListener("load", solve);

function solve() {
  const main = document.querySelector('#main')
  const [firstName, lastName, age, title] = document.querySelectorAll('input')
  const genre = document.querySelectorAll('option')
  const story = document.querySelector('#story')
  const preview = document.querySelector('#preview-list')
  const btnPublish = document.querySelector('#form-btn')
  btnPublish.addEventListener('click', publish)

  function publish(ev) {

    let fName = firstName.value
    let lName = lastName.value
    let storyAge = age.value
    let storyTitle = title.value
    let text = story.value
    let storyGenre = Array.from(genre)
    .find(option => option.selected).value

    if (!fName || !lName || !storyTitle || !storyAge || !text) {
      return
    }

    const li = document.createElement('li')
    li.className = 'story-info'
    li.innerHTML = `
      <article>
        <h4>Name: ${fName} ${lName}</h4> 
        <p>Age: ${storyAge}</p>
        <p>Title: ${storyTitle}</p>
        <p>Genre: ${storyGenre}</p>
        <p>${text}</p> 
      </article>
      <button class="save-btn">Save Story</button>
      <button class="edit-btn">Edit Story</button> 
      <button class="delete-btn">Delete Story</button> `

    preview.appendChild(li)
    const btnSave = preview.querySelector('li > button.save-btn')
    const btnEdit = preview.querySelector('li > button.edit-btn')
    const btnDelete = preview.querySelector('li > button.delete-btn')

    btnSave.addEventListener('click', saveData)
    btnEdit.addEventListener('click', editData)
    btnDelete.addEventListener('click', deleteData)

    firstName.value = ''
    lastName.value = ''
    title.value = ''
    age.value = ''
    story.value = ''
    btnPublish.disabled = true

    function saveData() {
      main.innerHTML = ''
      const h1 = document.createElement('h1')
      h1.textContent = 'Your scary story is saved!'
      main.appendChild(h1)
    }

    function editData() {
      firstName.value = fName
      lastName.value = lName
      age.value = storyAge
      title.value = storyTitle
      story.value = text

      preview.querySelector('li').remove()
      btnPublish.disabled = false

    }

    function deleteData() {
      preview.querySelector('li').remove()
      btnPublish.disabled = false
    }

  }

}
