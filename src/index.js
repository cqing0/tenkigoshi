import './style.css';
import weather from './modules/weatherApi';

const body = document.querySelector('body');

weather.getLocation('glasgow');
