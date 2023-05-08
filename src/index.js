import layout from './modules/makeLayout';
import weather from './modules/weatherApi';

layout.initPage();

async function testApi() {
  const newCity = await weather.getLocation('Tokyo');
  console.log(newCity.cityName);
}

testApi();
