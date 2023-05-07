import './style.css';
import weather from './modules/weatherApi';

const body = document.querySelector('body');

weather.getLocation('glasgow');

// async function testApi() {
//   const api = await fetch('http://api.weatherapi.com/v1/forecast.json?key=51e9b20e2c0f4057a77134636230505&q=glasgow');
//   const weatherData = await api.json();
//   console.log(weatherData);
//   const p = document.createElement('p');
//   body.appendChild(p);
//   console.log(weatherData.forecast.forecastday[0].day);
//   p.textContent = `${weatherData.location.name} ${weatherData.location.country}`;
// }
