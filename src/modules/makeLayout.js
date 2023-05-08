import '../style.css';

const layout = (() => {
  const body = document.querySelector('body');

  function findMain() {
    return document.querySelector('main.mainBit');
  }

  function createMainBit() {
    const mainBit = document.createElement('main');
    mainBit.classList.add('mainBit');
    return mainBit;
  }

  function createSearch() {
    const searchBar = document.createElement('text');
    return searchBar;
  }

  function createDiv(classAdd) {
    const div = document.createElement('div');
    div.classList.add(classAdd);
    const main = findMain();
    main.appendChild(div);
    return div;
  }

  function createSubDiv() {
    return 0;
  }

  const addText = (text) => {
    if (document.querySelector('main')) {
      const whereToaddText = document.querySelector('main');
      whereToaddText.textContent += text;
    }
  };

  const initPage = () => {
    body.appendChild(createMainBit());
    body.appendChild(createSearch());

    createDiv('location-info');
    createDiv('weather-info');
  };

  return { initPage, addText, createDiv };
})();

export default layout;
