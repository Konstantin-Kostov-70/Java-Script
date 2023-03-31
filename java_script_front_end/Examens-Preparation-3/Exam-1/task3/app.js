function solve() {

    const BASE_URL = 'http://localhost:3030/jsonstore/cookbook/recipes'
    const BASE_URL2 = 'http://localhost:3030/jsonstore/cookbook/details/'
    const main = document.querySelector('main')
    main.addEventListener('click', getCard)
    const art = document.getElementsByClassName

    async function getAllRecipes() {

        const res = await fetch(BASE_URL)
        const data = await res.json()
        Object.values(data).forEach(el => {
            let { _id, name, img } = el

            const previewArticle = createEl('article', null, main, _id, ['preview'])
            const divTitle = createEl('div', null, previewArticle, null, ['title'])
            const h2 = createEl('h2', name, divTitle)
            const divSmall = createEl('div', null, previewArticle, null, ['small'])
            const imgTag = createEl('img', null, divSmall, null, null, { src: img })

        })
    }
    getAllRecipes()

    //     <article>
    //     <h2>Title</h2>
    //     <div class="band">
    //         <div class="thumb">
    //             <img src="assets/lasagna.jpg">
    //         </div>
    //         <div class="ingredients">
    //             <h3>Ingredients:</h3>
    //             <ul>
    //                 <li>Ingredient 1</li>
    //                 <li>Ingredient 2</li>
    //                 <li>Ingredient 3</li>
    //                 <li>Ingredient 4</li>
    //             </ul>
    //         </div>
    //     </div>
    //     <div class="description">
    //         <h3>Preparation:</h3>
    //         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quaerat.</p>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur officia ipsam nulla vitae nobis
    //             reprehenderit pariatur aut dolor exercitationem impedit.</p>
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem odit officiis numquam
    //             corrupti? Quam.</p>
    //     </div>
    // </article>

    async function getCard(ev) {
        let id = ev.target.id
        if (ev.target.tagName === 'ARTICLE' || ev.target.classList[0] === 'preview') {
            const res = await fetch(`${BASE_URL2}${id}`)
            const data = await res.json()

            const cardArticle = createEl('article', null, main, null, 'card')
            const h2 = createEl('h2', data.name, cardArticle)
            const bandDiv = createEl('div', null, cardArticle, null, ['band'])
            const thumbDiv = createEl('div', null, bandDiv, null,['thumb'])
            const img = createEl('img', null, thumbDiv, null, null, {src: data.img})
            const ingredientDiv = createEl('div', null, bandDiv, null, ['ingredients'])
            const h3 = createEl('h3', data.name, ingredientDiv)
            const ul = createEl('ul', null, ingredientDiv)
            data.ingredients.forEach(ingredient => {
                const li = createEl('li', ingredient, ul)
            })
            const contentDiv = createEl('div', null, cardArticle)
            const descriptionDiv = createEl('div', null, contentDiv, null, ['description'])
            const descTitle = createEl('h3', 'Preparation', descriptionDiv)
            data.steps.forEach(step => {
                const p = createEl('p', step, descriptionDiv)
            })
            const allCards = Array.from(document.getElementsByClassName('card'))
            if (allCards.length > 1) {
                allCards[0].remove()
            }
            
        }
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

solve()