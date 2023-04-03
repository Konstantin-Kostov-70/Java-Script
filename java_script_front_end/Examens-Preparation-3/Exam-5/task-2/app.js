window.addEventListener('load', solve);

function solve() {
    let allInputs = {
        genre: document.querySelector('#genre'),
        name: document.querySelector('#name'),
        author: document.querySelector('#author'),
        date: document.querySelector('#date'),
    }

    const btnAdd = document.querySelector('#add-btn')
    btnAdd.addEventListener('click', addToCollection)
    const songsCollection = document.querySelector('#all-hits > div')
    const savedSongs = document.querySelector('#saved-hits > div')
    const likes = document.querySelector('#total-likes > div > p')

    let counter = 0

    function addToCollection(ev) {
        if (ev) {
            ev.preventDefault()
        }

        let isFull = Object.values(allInputs).every(el => el.value !== '')
        if (!isFull) {
            return
        }

        let [genre, name, author, date] = Object.values(allInputs)

        const container = createEl('div', null, songsCollection, null, ['hits-info'])
        const img = createEl('img', null, container, null, null, { src: './static/img/img.png' })
        const h2Genre = createEl('h2', `Genre: ${genre.value}`, container)
        const h2Name = createEl('h2', `Name: ${name.value}`, container)
        const h2Author = createEl('h2', `Author: ${author.value}`, container)
        const h3Date = createEl('h3', `Date: ${date.value}`, container)

        const btnSave = createEl('button', 'Save song', container, null, ['save-btn'])
        const btnLike = createEl('button', 'Like song', container, null, ['like-btn'])
        const btnDelete = createEl('button', 'Delete', container, null, ['delete-btn'])

        btnSave.addEventListener('click', saveSong)
        btnLike.addEventListener('click', likeSong)
        btnDelete.addEventListener('click', deleteSong)

        Object.values(allInputs).forEach(el => el.value = '')
    }

    function saveSong(ev) {

        savedSongs.appendChild(ev.target.parentNode)
        savedSongs.querySelector('div > button.save-btn').remove()
        savedSongs.querySelector('div > button.like-btn').remove()
        
    }

    function likeSong(ev) {
        counter++
        likes.textContent = `Total Likes: ${counter}`
        ev.target.disabled = true

    }

    function deleteSong(ev) {
        ev.target.parentNode.remove()
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
            element.classList.add(_class)
        }
        if (attributes) {
            for (key in attributes) {
                element.setAttribute(key, attributes[key])
            }
        }
        return element
    }



}