function attachEvents() {
    const location = document.getElementById('location')
    const container = document.getElementById('forecast')
    const current = document.getElementById('current')
    const upcoming = document.getElementById('upcoming')
    const btnGet = document.getElementById('submit')
    btnGet.addEventListener('click', onClick);

    async function onClick(ev) {
        const weather = await getForecast(location.value)
        container.style.display = 'block'

        let todayDiv = document.createElement('div')
        todayDiv.classList.add('forecast')

        let upcomingDiv = document.createElement('div')
        upcomingDiv.classList.add('forecast-info')
        

        let currentForecastDiv = document.querySelector('#current > div.forecast')
        if (current.contains(currentForecastDiv)) {
            current.removeChild(currentForecastDiv)
        }

        let currentUpcomingDiv = document.querySelector('#upcoming > div.forecast-info')
        if (upcoming.contains(currentUpcomingDiv)) {
            upcoming.removeChild(currentUpcomingDiv)
        }


        if (weather === 'Error') {
            todayDiv.textContent = weather
        }
        else {
            let conditionToday = weather.today.forecast.condition
            let symbolToday = getSymbol(conditionToday)
            todayDiv.innerHTML = `
            <span class="condition symbol">${symbolToday}</span> 
            <span class="condition">
                 <span class="forecast-data">${weather.today.name}</span>
                 <span class="forecast-data">${weather.today.forecast.low}${'&#176;'}/${weather.today.forecast.high}${'&#176;'}</span>
                <span class="forecast-data">${conditionToday}</span>
            </span>`

            let upcomingData = weather.upcoming.forecast
            upcomingData.forEach(obj => {

                let span = document.createElement('span')
                span.classList.add('upcoming')

                let conditionUpcoming = obj.condition
                let symbolUpcoming = getSymbol(conditionUpcoming)
                span.innerHTML = `
                    <span class="symbol">${symbolUpcoming}</span> 
                    <span class="forecast-data">${obj.low}${'&#176;'}/${obj.high}${'&#176;'}</span>
                    <span class="forecast-data">${conditionUpcoming}</span>`
                
                upcomingDiv.appendChild(span)

            });
        }

        current.appendChild(todayDiv)
        upcoming.appendChild(upcomingDiv)
        location.value = ''

    }


}

attachEvents();

function getSymbol(condition) {

    const symbols = {
        'Sunny': '&#x2600;', 
        'Partly sunny': '&#x26C5;', 
        'Overcast': '&#x2601;', 
        'Rain': '&#x2614;' 
    }
    let symbol = symbols[condition]
    return symbol
}

async function getForecast(city) {
    const code = await getCode(city)
    if (code) {
        const [today, upcoming] = await Promise.all([
            getToday(code),
            getUpcoming(code)
        ])

        return { today, upcoming }
    }
    return 'Error'
}

async function getCode(city) {
    url = 'http://localhost:3030/jsonstore/forecaster/locations'

    try {
        const res = await fetch(url)
        const data = await res.json()
        let obj = data.find(el => el.name === city)
        return obj.code

    } catch (err) {
        return
    }
}

async function getToday(code) {
    url = 'http://localhost:3030/jsonstore/forecaster/today/'

    const res = await fetch(`${url}${code}`)
    const data = await res.json()
    return data
}

async function getUpcoming(code) {
    url = 'http://localhost:3030/jsonstore/forecaster/upcoming/'

    const res = await fetch(`${url}${code}`)
    const data = await res.json()
    return data

}