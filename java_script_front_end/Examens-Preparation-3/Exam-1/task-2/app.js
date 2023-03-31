window.addEventListener("load", solve);

function solve() {

  const firstName = document.querySelector('#first-name')
  const lastName = document.querySelector('#last-name')
  const age = document.querySelector('#age')
  const gender = document.querySelector('#genderSelect')
  const textArea = document.querySelector('#task')
  const inProgress = document.querySelector('#in-progress')
  const btnSubmit = document.querySelector('#form-btn')
  const progressCount = document.querySelector('#progress-count')
  const finished = document.querySelector('#finished')
  const btnClear = document.querySelector('#clear-btn')

  btnSubmit.addEventListener('click', addElements)
  btnClear.addEventListener('click', clearElements)
  inProgress.addEventListener('click', editElements)
  inProgress.addEventListener('click', markAsCompleted)
  let counter = 0


  function addElements(ev) {
    ev.preventDefault()
    if (firstName.value === '' 
    || lastName === '' 
    || age.value === '' 
    || textArea.value === '') {
      return
    }
    let genderValue = Array.from(gender.children).filter(option => option.selected)[0].textContent

    inProgress.innerHTML += `
    <li class="each-line">
      <article>
       <h4>${firstName.value} ${lastName.value}</h4>
       <p>${genderValue}, ${age.value}</p>
       <p>${textArea.value}</p>
     </article>
     <button class="edit-btn">Edit</button>
     <button class="complete-btn">Mark as complete</button> 
     </li>`

    firstName.value = ''
    lastName.value = ''
    age.value = ''
    textArea.value = ''

    counter++
    progressCount.textContent = String(counter)

  }

  function editElements(ev) {
    if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Edit') {
      let li = ev.target.parentElement
      let nameArr = li.querySelector('article > h4').textContent.split(' ')
      firstName.value = nameArr[0]
      lastName.value = nameArr[1]

      let ageAndGenderArr = li.querySelector(' article > p:nth-child(2)').textContent.split(', ')
      let genderValue = ageAndGenderArr[0]
      age.value = ageAndGenderArr[1]
      textArea.value = li.querySelector('article > p:nth-child(3)').textContent
      
      let options = Array.from(gender.children)
      const maleOption = options[0]
      const femaleOption = options[1]

      genderValue == "Male"
        ? (maleOption.selected = true)
        : (femaleOption.selected = true);

      ev.target.parentElement.remove()

      counter--
      progressCount.textContent = String(counter)
    }

  }

  function markAsCompleted(ev) {

    if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Mark as complete') {

      let li = ev.target.parentElement
      let nameArr = li.querySelector('article > h4').textContent.split(' ')
      let firstN = nameArr[0]
      let lastN = nameArr[1]

      let ageAndGenderArr = li.querySelector(' article > p:nth-child(2)').textContent.split(', ')
      let gender = ageAndGenderArr[0]
      let age = ageAndGenderArr[1]
      let textAr = li.querySelector('article > p:nth-child(3)').textContent

      finished.innerHTML += `
      <li class="each-line">
      <article>
       <h4>${firstN} ${lastN}</h4>
       <p>${gender}, ${age}</p>
       <p>${textAr}</p>
     </article>
     </li>`


      ev.target.parentElement.remove()
      counter--
      progressCount.textContent = String(counter)
    }
  }

  function clearElements() {
    Array.from(finished.children).forEach(el => el.remove())
  }
}
