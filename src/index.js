const body = document.querySelector('body');
body.style.cssText = 'height: 100%; background-color: rgb(100,100,100);';

async function testApi() {
  const api = await fetch('http://api.weatherapi.com/v1/forecast.json?key=51e9b20e2c0f4057a77134636230505&q=glasgow');
  const weatherData = await api.json();
  console.log(weatherData);
  const p = document.createElement('p');
  body.appendChild(p);
  console.log(weatherData.forecast.forecastday[0].day);
  p.textContent = `${weatherData.location.name} ${weatherData.location.country}`;
}

testApi();
