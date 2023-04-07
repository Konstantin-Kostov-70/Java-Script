function solve() {
   const post = document.querySelector('main > section')

   const inputs = {
      author: document.querySelector('#creator'),
      title: document.querySelector('#title'),
      category: document.querySelector('#category'),
      content: document.querySelector('#content'),
   }

   document.querySelector('button.btn.create').addEventListener('click', create)

   function create(ev) {
      ev.preventDefault()
      let author = inputs.author.value
      let title = inputs.title.value
      let category = inputs.category.value
      let content = inputs.content.value
     

      // if (!author || !title || !category || !content) {
      //    return
      // }

      // const article = createEl('article', null, post)
      // const h1Title = createEl('h1', title, article)
      // const pCategory = createEl('p', 'Category:', article)
      // const strongCategory = createEl('strong', category, pCategory)
      // const pCreator = createEl('p', 'Creator:', article)
      // const strongAuthor = createEl('strong', author, pCreator)
      // const pContent = createEl('p', content, article)
      // const divButtons = createEl('div', null, article, null, ['buttons'])
      // const btnDelete = createEl('button', 'Delete', divButtons, null, ['btn', 'delete'])
      // const btnArchive = createEl('button', 'Archive', divButtons, null, ['btn', 'archive'])

      // btnDelete.addEventListener('click', deletePost)
      // btnArchive.addEventListener('click', archivePost)

      const article = document.createElement('article')
      article.innerHTML = `
      <h1>${title}</h1> 
      <p>Category:
          <strong>${category}</strong>
      </p>
      <p>Creator:
          <strong>${author}</strong>
      </p>
      <p>${content}</p>
      <div class="buttons">
          <button class="btn delete">Delete</button>
          <button class="btn archive">Archive</button> 
      </div>`
      article.querySelector('button.btn.delete').addEventListener('click', deletePost)
      article.querySelector('button.btn.archive').addEventListener('click', archivePost)

      post.appendChild(article)

      Object.values(inputs).forEach(el => el.value = '')

      function deletePost() {
         article.remove()
      }

      function archivePost() {
         const ol = document.querySelector('ol')
         let li = document.createElement('li')
         li.textContent = title
         ol.appendChild(li)

         Array.from(ol.querySelectorAll('li'))
         .sort((a, b) =>a.textContent.localeCompare(b.textContent))
         .forEach(li => ol.appendChild(li))
      
         article.remove()
      }
   }

//    function createEl(tag, text, parent, _id, _class, attributes) {
//       let element = document.createElement(tag)

//       if (text) {
//           if (tag === 'input' || tag === 'textarea') {
//               element.value = text
//           }
//           else {
//               element.textContent = text
//           }
//       }
//       if (parent) {
//           parent.appendChild(element)
//       }
//       if (_id) {
//           element.id = _id
//       }
//       if (_class) {
//           element.classList.add(..._class)
//       }
//       if (attributes) {
//           for (key in attributes) {
//               element.setAttribute(key, attributes[key])
//           }
//       }
//       return element
//   }

}
