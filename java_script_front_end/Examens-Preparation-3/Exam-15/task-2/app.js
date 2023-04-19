window.addEventListener('load', solve);

function solve() {
    const form = document.querySelector('form')
    const elementGenre = document.querySelector('#genre')
    const elementName = document.querySelector('#name')
    const elementAuthor = document.querySelector('#author')
    const elementDate = document.querySelector('#date')
    const btnAdd = document.querySelector('#add-btn')
    btnAdd.addEventListener('click', add)
    const collections = document.querySelector('#all-hits > div')
    const savedSongs = document.querySelector('#saved-hits > div')
    const likes = document.querySelector('#total-likes > div > p')
    let total = 0
    
    function add(ev) {
        if (ev) {
            ev.preventDefault()
        }
        let genre = elementGenre.value
        let name = elementName.value
        let author = elementAuthor.value
        let date = elementDate.value

        if (!genre || !name || !author || !date) {
            return
        }
        const container = document.createElement('div')
        container.className = 'hits-info'
        container.innerHTML = `
                <img src="./static/img/img.png">
                <h2>Genre: ${genre}</h2>
                <h2>Name: ${name}</h2>
                <h2>Author: ${author}</h2>
                <h3>Date: ${date}</h3>
                <button class="save-btn">Save song</button>
                <button class="like-btn">Like song</button>
                <button class="delete-btn">Delete</button>`

        const btnSave = container.querySelector('button.save-btn')
        const btnLike = container.querySelector('button.like-btn')
        const btnDelete = container.querySelector('button.delete-btn')

        btnSave.addEventListener('click', save)
        btnLike.addEventListener('click', like)
        btnDelete.addEventListener('click', delSong)

        collections.appendChild(container)
        form.reset()

        function save(ev) {
            ev.target.parentNode.querySelector('button.like-btn').remove()
            savedSongs.appendChild(ev.target.parentNode)
            ev.target.parentNode.querySelector('button.save-btn').remove()
        }

        function like(ev) {
            total ++
            likes.textContent = `Total Likes: ${total}`
            ev.target.disabled = true
        }

        function delSong(ev) {
            ev.target.parentNode.remove()
        }
    }
  
}