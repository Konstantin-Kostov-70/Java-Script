window.addEventListener("load", solve);

function solve() {

  // Take reference from DOM tree //

  const main = document.querySelector('#main');
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const age = document.querySelector('#age');
  const title = document.querySelector('#story-title');
  const genre = document.querySelectorAll('option')
  const story = document.querySelector('#story');
  const btnPublish = document.querySelector('#form-btn');
  btnPublish.addEventListener('click', publish);
  const preview = document.querySelector('#preview-list');

  // start the eventListener //

  function publish(ev) {

    let fName = firstName.value
    let lName = lastName.value
    let storyAge = age.value
    let storyTitle = title.value
    let text = story.value
    let storyGenre  = Array.from(genre).find(option => option.selected).value



    if (!fName || !lName || !storyAge || !storyTitle || !text) {
      return
    }
    // create elements and add to HTML //

    let li = createElement('li', null, preview, null, ['story-info'])
    let article = createElement('article', null, li);
    let fullName = createElement('h4', `Name: ${fName} ${lName}`, article);
    let pAge = createElement('p', `Age: ${storyAge}`, article);
    let pTitle = createElement('p', `Title: ${storyTitle}`, article);
    let pGenre = createElement('p', `Genre: ${storyGenre}`, article);
    let pStore = createElement('p', text, article);

    let btnSave = createElement('button', 'Save Story', li, null, ['save-btn']);
    let btnEdit = createElement('button', 'Edit Story', li, null, ['edit-btn']);
    let btnDelete = createElement('button', 'Delete Story', li, null, ['delete-btn']);
   
  
    firstName.value = '';
    lastName.value = '';
    age.value = '';
    title.value = '';
    story.value = '';

    btnPublish.disabled = true;

    btnEdit.addEventListener('click', editData);
    btnSave.addEventListener('click', saveData);
    btnDelete.addEventListener('click', deleteData);

    function editData(ev) {

      firstName.value = fName;
      lastName.value = lName;
      age.value = storyAge;
      title.value = storyTitle;
      story.value = text;

      li.remove()
      btnPublish.disabled = false;
    }

    function saveData(ev) {
      Array
        .from(main.children)
        .forEach(child => main.removeChild(child))

      let saveTitle = document.createElement('h1')
      saveTitle.textContent = "Your scary story is saved!"
      main.appendChild(saveTitle)
    }

    function deleteData(ev) {
      preview.removeChild(li)
      btnPublish.disabled = false
    }

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
