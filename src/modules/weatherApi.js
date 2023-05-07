const weather = (() => {
  async function getApi(city) {
    const getApi = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=51e9b20e2c0f4057a77134636230505&q=${city}`);
    const apiJson = await getApi.json();
    return apiJson;
  }

  async function getLocation(city) {
    const json = await getApi(city);
    console.log(json);
  }
  return { getLocation };
})();

export default weather;
