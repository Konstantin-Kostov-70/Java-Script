async function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations'
    const input = document.querySelector('#location')
    const divForecast = document.querySelector('#forecast')
    const divCurrent = document.querySelector('#current')
    const divUpcoming = document.querySelector('#upcoming')

    document.querySelector('#submit').addEventListener('click', getInfo)

    const result = await fetch(BASE_URL)
    const data = await result.json()
    
    async function getInfo() {
        if (divCurrent.querySelector('.forecast') && divUpcoming.querySelector('.forecast-info')) {
             divCurrent.querySelector('.forecast').remove()
             divUpcoming.querySelector('.forecast-info').remove()
        }

        const todayURL = 'http://localhost:3030/jsonstore/forecaster/today/'
        const threeDaysURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/'

        divForecast.style.display = 'block'

        let spanContainer = document.createElement('div')
        spanContainer.className = 'forecast'
        let threeDays = document.createElement('div')
        threeDays.className = 'forecast-info'

        const location = input.value
        input.value = ''

        let obj = data.find(el => el.name === location)
        if (!obj) {
          spanContainer.textContent = 'Error'
          divCurrent.appendChild(spanContainer)
          return
        }
        let { code, city }  = obj

        const res = await fetch(`${todayURL}${code}`)
        const { forecast, name } = await res.json()
        const { condition, high, low } = forecast

        spanContainer.innerHTML = `
       <span class="condition symbol">${getSymbol(condition)}</span> 
       <span class="condition">
          <span class="forecast-data">${name}</span>
          <span class="forecast-data">${low}${'&#176;'}/${high}${'&#176;'}</span>
          <span class="forecast-data">${condition}</span> 
       </span>`
        divCurrent.appendChild(spanContainer)

        const threeDaysRes = await fetch(`${threeDaysURL}${code}`)
        const threeDaysData = await threeDaysRes.json()

        const threeDaysForecast = threeDaysData.forecast
        threeDaysForecast.forEach(obj => {
            const newCondition = obj.condition
            const newHigh = obj.high
            const newLow = obj.low

            let span = document.createElement('span')
            span.className = 'upcoming'

            span.innerHTML = `
               <span class="symbol">${getSymbol(newCondition)}</span>
               <span class="forecast-data">${newLow}${'&#176;'}/${newHigh}${'&#176;'}</span>
               <span class="forecast-data">${newCondition}</span>`

            threeDays.appendChild(span)

        });
        divUpcoming.appendChild(threeDays)

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