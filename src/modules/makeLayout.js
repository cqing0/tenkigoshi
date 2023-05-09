import '../style.css';

const layout = (() => {
  const body = document.querySelector('body');

  function findMain() {
    return document.querySelector('main.mainBit');
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
    body.appendChild(createSearch());
  };

  return { initPage, addText };
})();

export default layout;
