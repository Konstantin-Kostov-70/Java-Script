const input = document.getElementById('input')
const textArea = document.getElementById('text-area')
const p = document.querySelector('p')
const btn = document.getElementById('btn')
btn.addEventListener('click', onClick)
input.style.display = 'block'


// function onClick(ev) {
//     const BASE_URL = input.value

//    fetch(BASE_URL)
//     .then(res => {
//         if (res.ok === false) {
//             throw new Error(`${res.status} Not Found`)
//         }
//         return res.text()
//     })
//     .then((data) => textArea.value = data)
//     .catch((err) => {
//         p.textContent = err.message
//     })
// }

async function onClick(ev) {
    const BASE_URL = input.value

    //    fetch(BASE_URL)
    //     .then(res => {
    //         if (res.ok === false) {
    //             throw new Error(`${res.status} Not Found`)
    //         }
    //         return res.text()
    //     })
    //     .then((data) => textArea.value = data)
    //     .catch((err) => {
    //         p.textContent = err.message
    //     })
    try {
        const response = await fetch(BASE_URL)
        if (response.ok === false) {
            throw new Error(`${response.status} Not Found`)
        }
        const data = await response.text()
        textArea.value = data

    } catch (err) {
        p.textContent = err.message
    }
}