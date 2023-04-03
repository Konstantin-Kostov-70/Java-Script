window.addEventListener("load", solve);

function solve() {
  const input = {
    title: document.querySelector('#post-title'),
    category: document.querySelector('#post-category'),
    content: document.querySelector('#post-content')
  }

  const btnPublish = document.querySelector('#publish-btn')
  btnPublish.addEventListener('click', publish)

  const reviewList = document.querySelector('#review-list')
  const publishedList = document.querySelector('#published-list')

  const btnClear = document.querySelector('#clear-btn')
  btnClear.addEventListener('click', clearInfo)

  function publish(ev) {
    ev.preventDefault()
    let title = input.title.value
    let category = input.category.value
    let content = input.content.value

    if (title == '' || category == '' || content == '') {
        return
    }
    const li = document.createElement('li')
    li.className = 'rpost'
    li.innerHTML = `<article>
    <h4>${title}</h4>
    <p>Category: ${category}</p>
    <p>Content: ${content}</p> 
    </article>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn approve">Approve</button>`

    const editBtn = li.querySelector('.edit')
    editBtn.addEventListener('click', edit)

    const approveBtn = li.querySelector('.approve')
    approveBtn.addEventListener('click', approve)

    reviewList.appendChild(li)

    input.title.value = ''
    input.category.value = ''
    input.content.value = ''

    function edit() {
      input.title.value = title
      input.category.value = category
      input.content.value = content
      li.remove()
    }

    function approve() {
      lists.published.appendChild(li)
      editBtn.remove()
      approveBtn.remove()
    }
}

function clearInfo() {
  publishedList.innerHTML = ''
}

  // function publish(ev) {
  //   if (ev) {
  //     ev.preventDefault()
  //   }
  //   let isFull = Object.values(input).every(el => el.value !== '')
  //   if (!isFull) {
  //     return
  //   }

  //   let [title, category, content] = Object.values(input)

  //   const li = createEl('li', null, reviewList, null, ['rpost'])
  //   const article = createEl('article', null, li)
  //   const h4 = createEl('h4', title.value, article)
  //   const pCategory = createEl('p', `Category: ${category.value}`, article)
  //   const pContent = createEl('p', `Content: ${content.value}`, article)

  //   const btnEdit = createEl('button', 'Edit', li, null, ['action-btn', 'edit'])
  //   btnEdit.addEventListener('click', edit)

  //   const btnApprove = createEl('button', 'Approve', li, null, ['action-btn', 'approve'])
  //   btnApprove.addEventListener('click', approve)

  //   Object.values(input).forEach(el => el.value = '')

  // }

  // function edit(ev) {
  //   const allValues = Array
  //     .from(ev.target.parentElement.querySelector('article').children)
  //     .map(el => el.textContent)

  //   Object.values(input).forEach((el, idx) => {
  //     el.value = allValues[idx]
  //   })

  //   ev.target.parentElement.remove()

  // }

  // function approve(ev) {
  //   publishedList.appendChild(ev.target.parentElement)
  //   publishedList.querySelector('li > button.action-btn.approve').remove()
  //   publishedList.querySelector('li > button.action-btn.edit').remove()

  // }

  // function clearInfo(ev) {
  //   publishedList.innerHTML = ''
  // }

  // function createEl(tag, text, parent, _id, _class, attributes) {
  //   let element = document.createElement(tag)

  //   if (text) {
  //     if (tag === 'input' || tag === 'textarea') {
  //       element.value = text
  //     }
  //     else {
  //       element.textContent = text
  //     }
  //   }
  //   if (parent) {
  //     parent.appendChild(element)
  //   }
  //   if (_id) {
  //     element.id = _id
  //   }
  //   if (_class) {
  //     element.classList.add(..._class)
  //   }
  //   if (attributes) {
  //     for (key in attributes) {
  //       element.setAttribute(key, attributes[key])
  //     }
  //   }
  //   return element
  // }
}
