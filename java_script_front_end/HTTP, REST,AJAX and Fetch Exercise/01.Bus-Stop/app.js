async function getInfo() {
    const input = document.getElementById('stopId')
    const url = 'http://localhost:3030/jsonstore/bus/businfo/'
    const stopName = document.getElementById('stopName')
    const buses = document.getElementById('buses')
    buses.innerHTML = ''

    try {
        const res = await fetch(`${url}${input.value}`)
        if (res.status === 204) {
            throw new Error('Error')
        }
        const data = await res.json()

        stopName.textContent = data.name
        for (let bus in data.buses) {
            let minutes = data.buses[bus]
            const li = document.createElement('li')
            li.textContent = `Bus ${bus} arrives in ${minutes} minutes`
            buses.appendChild(li)
        }
        input.value = ''

    } catch (error) {
        input.value = ''
        stopName.textContent = 'Error'
    }

}