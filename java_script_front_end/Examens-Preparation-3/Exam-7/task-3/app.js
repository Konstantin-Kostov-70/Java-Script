async function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations'
    const todayURL = 'http://localhost:3030/jsonstore/forecaster/today/'
    const threeDaysURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/'

    const input = document.querySelector('#location')
    const divForecast = document.querySelector('#forecast')
    const divCurrent = document.querySelector('#current')
    const divUpcoming = document.querySelector('#upcoming')

    let spanContainer = document.createElement('div')

    document.querySelector('#submit').addEventListener('click', getInfo)

    const result = await fetch(BASE_URL)
    const data = await result.json()

    async function getInfo() {
        if (divCurrent.querySelector('.forecast') && divUpcoming.querySelector('.forecast-info')) {
            divCurrent.querySelector('.forecast').remove()
            divUpcoming.querySelector('.forecast-info').remove()
        }

        divForecast.style.display = 'block'

        const location = input.value
        input.value = ''
        let town = data.find(el => el.name === location)

        if (!town) {
            spanContainer.textContent = 'Error'
            divCurrent.appendChild(spanContainer)
            return
        }
        const code = town.code

        divCurrent.appendChild(await getForecast(todayURL, code))
        divUpcoming.appendChild(await getThreeDays(threeDaysURL, code))
    }

    async function getForecast(url, cod) {
        const res = await fetch(`${url}${cod}`)
        const { forecast, name } = await res.json()
        const { condition, high, low } = forecast

        spanContainer.className = 'forecast'
        spanContainer.innerHTML = `
       <span class="condition symbol">${getSymbol(condition)}</span> 
       <span class="condition">
          <span class="forecast-data">${name}</span>
          <span class="forecast-data">${low}${'&#176;'}/${high}${'&#176;'}</span>
          <span class="forecast-data">${condition}</span> 
       </span>`
        return (spanContainer)
    }

    async function getThreeDays(url, cod) {
        let threeDays = document.createElement('div')
        threeDays.className = 'forecast-info'

        const res = await fetch(`${url}${cod}`)
        const data = await res.json()

        const threeDaysForecast = data.forecast
        threeDaysForecast.forEach(obj => {
            const { condition, high, low } = obj

            let span = document.createElement('span')
            span.className = 'upcoming'

            span.innerHTML = `
               <span class="symbol">${getSymbol(condition)}</span>
               <span class="forecast-data">${low}${'&#176;'}/${high}${'&#176;'}</span>
               <span class="forecast-data">${condition}</span>`

            threeDays.appendChild(span)
        });
        return threeDays
    }

    function getSymbol(name) {
        let symbol = ''
        switch (name) {
            case 'Sunny':
                symbol = '&#x2600;'
                break;
            case 'Partly sunny':
                symbol = '&#x26C5;'
                break;

            case 'Overcast':
                symbol = '&#x2601;'
                break;

            case 'Rain':
                symbol = '&#x2614;'
                break;
        }
        return symbol
    }
}

attachEvents();