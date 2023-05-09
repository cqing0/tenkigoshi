import layout from './modules/makeLayout';
import weather from './modules/weatherApi';

layout.initPage();

async function testApi() {
  const newCity = await weather.getLocation('Tokyo');
  const newCityWeather = await weather.getLocationWeather('Tokyo');

  const timeBit = document.querySelector('.location .time');
  timeBit.textContent = `${newCity.time}`;

  const countryBit = document.querySelector('.location .country');
  countryBit.textContent = `${newCity.country}`;

  const cityBit = document.querySelector('.location .city');
  cityBit.textContent = `${newCity.cityName}`;

  console.log(newCity);
  console.log(newCityWeather);
}

testApi();
