const weather = (() => {
  const testCity = 'Glasgow';

  async function getApiJson(city) { // Retuns the WeatherAPI JSON
    const getApi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=51e9b20e2c0f4057a77134636230505&q=${city}`);
    const apiJson = await getApi.json();
    return apiJson;
  }
  async function getLocation(city) { // Returns the Json location object
    const cityJson = await getApiJson(city);

    const { country } = cityJson.location;
    const cityName = cityJson.location.name;
    const time = cityJson.location.localtime;

    console.log(country);
    console.log(cityName);
    console.log(time);

    console.log(cityJson);

    return cityJson;
  }
  return { getLocation };
})();

export default weather;
