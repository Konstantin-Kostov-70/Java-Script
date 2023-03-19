window.addEventListener("load", solve);

function solve() {

  // Take reference from DOM tree //

  const main = document.querySelector('#main');
  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const age = document.querySelector('#age');
  const title = document.querySelector('#story-title');
  const genre = document.querySelectorAll('#genre > option');
  const story = document.querySelector('#story');
  const btnPublish = document.querySelector('#form-btn');
  btnPublish.addEventListener('click', publish);
  const preview = document.querySelector('#preview-list');

  // start the eventListener //

  function publish(ev) {

    let allValue = [
      firstName.value,
      lastName.value,
      age.value,
      title.value,
      story.value
    ]
    let nonValue = allValue
      .filter(value => value === '');

    if (nonValue.length > 0) {
      return
    }
    // create elements and add to HTML //

    let li = document.createElement('li')
    li.classList.add('story-info');

    let article = document.createElement('article');
    let fullName = document.createElement('h4');
    let pAge = document.createElement('p');
    let pTitle = document.createElement('p');
    let pGenre = document.createElement('p');
    let pStore = document.createElement('p');

    let btnSave = document.createElement('button');
    btnSave.classList.add('save-btn');
    btnSave.textContent = 'Save Story';

    let btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-btn');
    btnEdit.textContent = 'Edit Story';

    let btnDelete = document.createElement('button');
    btnDelete.classList.add('delete-btn');
    btnDelete.textContent = 'Delete Story';

    article.appendChild(fullName);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStore);

    li.appendChild(article)
    li.appendChild(btnSave)
    li.appendChild(btnEdit)
    li.appendChild(btnDelete)

    preview.appendChild(li)

    fullName.textContent = `Name: ${firstName.value} ${lastName.value}`;

    pAge.textContent = `Age: ${age.value}`;

    pTitle.textContent = `Title: ${title.value}`

    Array.from(genre).forEach(option => {
      if (option.selected) {
        pGenre.textContent = `Genre: ${option.value}`
      }
    });

    pStore.textContent = story.value;

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

      firstName.value = allValue[0];
      lastName.value = allValue[1];
      age.value = allValue[2];
      title.value = allValue[3];
      story.value = allValue[4];

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

}
