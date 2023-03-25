function solve() {
    const btnArrive = document.getElementById('arrive')
    const btnDepart = document.getElementById('depart')
    const info = document.querySelector('#info > span')
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/'
    let stopName = 'depot'
    let stopArrive = ''

    function depart() {
        btnDepart.disabled = true
        btnArrive.disabled = false
        fetch(`${BASE_URL}${stopName}`)
            .then((res) => {
                if (res.status === 204) {
                    throw new Error('Error')
                }
                return res.json()
            })
            .then((data) => {
                info.textContent = `Next stop ${data.name}`
                stopArrive = data.name
                stopName = data.next
            })
            .catch((err) => {
                console.error(err)
                info.textContent = 'Error'
                btnDepart.disabled = true
                btnArrive.disabled = true
            })
    }

    async function arrive() {
        btnDepart.disabled = false
        btnArrive.disabled = true
        info.textContent = `Arriving at ${stopArrive}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();