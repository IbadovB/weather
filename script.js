const weatherResult = document.querySelector('#weatherResult')


function fetchWeather() {
  weatherResult.innerHTML = '<p>Yüklənir...</p>'
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=40.4093&longitude=49.8671&current_weather=true'

  fetch(url)
    .then(response => response.json())
    .then(data => {


      console.log(data)
      const temperature = data.current_weather.temperature
      const windspeed = data.current_weather.windspeed
      const currentTime = new Date().toLocaleString()
      weatherResult.innerHTML = ''

      const weatherContainer = document.createElement('div')
      weatherContainer.style.display = 'flex';
      weatherContainer.style.flexDirection = 'column';
      weatherContainer.style.gap = '10px'

      const timeText = document.createElement('div');
      timeText.textContent = `Alınma vaxtı: ${currentTime}`


      const tempText = document.createElement('div')
      const sunIcon = document.createElement('i')
      sunIcon.className = 'fas fa-sun'
      sunIcon.style.color = 'gold'
      sunIcon.style.fontSize = '16px'

      tempText.textContent = `Temperatur: ${temperature}°C`
      tempText.appendChild(sunIcon)

      const windText = document.createElement('div')
      const windIcon = document.createElement('i')
      windIcon.className = 'fa-solid fa-wind'
      windIcon.style.color = 'green'
      windIcon.style.fontSize = '16px'
      windText.textContent = `Küləyin sürəti: ${windspeed} km/saat`
      windText.appendChild(windIcon)



      weatherContainer.appendChild(tempText)
      weatherContainer.appendChild(windText)
      weatherContainer.appendChild(timeText)

      weatherResult.appendChild(weatherContainer)
    })
    .catch(error => {
      console.error('Error fetching weather:', error)
      weatherResult.innerHTML = '<p>Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.</p>'
    });
}

const refresh = document.createElement('button');
refresh.textContent = 'REFRESH';
refresh.style.padding = '8px 12px';
refresh.style.fontSize = '16px';
refresh.style.marginTop = '50px';

document.body.appendChild(refresh);

refresh.addEventListener('click', fetchWeather)
document.body.appendChild(refresh)

fetchWeather()



