function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/'
    const info = document.querySelector('#info > span')
    let stopId = 'depot'
    let stopName = ''
    async function depart() {
        const res = await fetch (`${BASE_URL}${stopId}`)
        const data = await res.json()
     
        stopName = data['name']
        stopId = data['next']
        info.textContent = `Next stop ${stopName}`
        document.querySelector('#depart').disabled = true
        document.querySelector('#arrive').disabled = false

    }

    async function arrive() {
        info.textContent = `Arriving at  ${stopName}`
        document.querySelector('#depart').disabled = false
        document.querySelector('#arrive').disabled = true

    }

    return {
        depart,
        arrive
    };
}

let result = solve();