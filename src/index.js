const body = document.querySelector('body');
body.style.cssText = 'height: 100%; background-color: rgb(100,100,100);';

async function testApi() {
  const api = await fetch('http://api.weatherapi.com/v1/forecast.json?key=51e9b20e2c0f4057a77134636230505&q=glasgow');
  const weatherData = await api.json();
  console.log(weatherData);
}

testApi();
