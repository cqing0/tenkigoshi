import layout from './modules/makeLayout';
import weather from './modules/weatherApi';

layout.initPage();

async function testApi() {
  const newCity = await weather.getLocation('Tokyo');
  layout.addText(newCity.country);
  layout.addText(newCity.cityName);
  layout.addText(newCity.time);
}

testApi();
