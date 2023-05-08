import '../style.css';

const layout = (() => {
  const body = document.querySelector('body');

  function createMainBit() {
    const mainBit = document.createElement('main');
    mainBit.classList.add('mainBit');
    return mainBit;
  }

  function createSearch() {
    const searchBar = document.createElement('text');
    return searchBar;
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
  };

  return { initPage, addText };
})();

export default layout;
