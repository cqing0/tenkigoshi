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

  const addDegree = (element, text) => {
    const spanBit = document.createElement('span');
    spanBit.textContent = `°${text}`;
    element.appendChild(spanBit);
  };

  const setBackground = (celsius) => {
    if (celsius < 10) {
      return 'var(--cold)';
    } if (celsius >= 10 && celsius <= 22) {
      return 'var(--tepid)';
    } if (celsius >= 22 && celsius <= 32) {
      return 'var(--warm)';
    } if (celsius >= 32) {
      return 'var(--hot)';
    }
    return 'grey';
  };

  const initPage = () => {
    body.appendChild(createSearch());
  };

  return {
    initPage, addText, addDegree, setBackground,
  };
})();

export default layout;
