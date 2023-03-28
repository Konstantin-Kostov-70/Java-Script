function solution() {
    const listUrl = 'http://localhost:3030/jsonstore/advanced/articles/list/'
    const detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/'
    const main = document.querySelector('#main')
    const title = document.querySelector('#main > div > div.head > span')

    main.addEventListener('click', getDetails)

    async function createAccordion() {
        const result = await fetch(listUrl)
        const data = await result.json()
        Array.from(data).forEach(el => {
            main.innerHTML += `
            <div class="accordion">
                <div class="head">
                   <span>${el.title}</span>
                   <button id=${el._id} class="button">More</button>
                </div>
                <div class="extra">
                    <p></p>
                </div>
            </div>`
        })
    }
    createAccordion()

    async function getDetails(ev) {
        const extraDiv = ev.target.parentElement.parentElement.querySelector('.extra')

        if (ev.target.tagName === 'BUTTON'
            && extraDiv.style.display !== 'block') {
            const content = extraDiv.querySelector('p')
            const res = await fetch(`${detailsUrl}${ev.target.id}`)
            const data = await res.json()
            content.textContent = data.content
            extraDiv.style.display = 'block'
           
        }
        else if (ev.target.tagName === 'BUTTON'  && extraDiv.style.display === 'block') {
            extraDiv.style.display = 'none'
        }
    }
}