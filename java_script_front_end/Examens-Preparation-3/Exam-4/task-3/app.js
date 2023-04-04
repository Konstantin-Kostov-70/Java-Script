async function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/'
    const id = document.querySelector('#stopId').value

    const stopName = document.querySelector('#stopName')
    const busesNum = document.querySelector('#buses')

    try {
        const res = await fetch(`${BASE_URL}${id}`)
        const { buses, name } = await res.json()

        stopName.textContent = name

        for (bus in buses) {
            let minutes = buses[bus]

            const li = document.createElement('li')
            li.textContent = `Bus ${bus} arrives in ${minutes} minutes`
            busesNum.appendChild(li)
        }

    } catch (error) {
         stopName.textContent = 'Error'
    }
}

