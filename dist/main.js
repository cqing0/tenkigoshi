/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const body = document.querySelector('body');\r\nbody.style.cssText = 'height: 100%; background-color: rgb(100,100,100);';\r\n\r\nasync function testApi() {\r\n  const api = await fetch('http://api.weatherapi.com/v1/forecast.json?key=51e9b20e2c0f4057a77134636230505&q=glasgow');\r\n  const weatherData = await api.json();\r\n  console.log(weatherData);\r\n  const p = document.createElement('p');\r\n  body.appendChild(p);\r\n  console.log(weatherData.forecast.forecastday[0].day);\r\n  p.textContent = `${weatherData.location.name} ${weatherData.location.country}`;\r\n}\r\n\r\ntestApi();\r\n\n\n//# sourceURL=webpack://tenkigoshi/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;