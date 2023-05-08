import '../style.css';

const layout = (() => {
  const body = document.querySelector('body');

  function createMainBit() {
    const mainBit = document.createElement('main');
    mainBit.classList.add('mainBit');
    return mainBit;
  }

  const initPage = () => {
    body.appendChild(createMainBit());
  };

  return { initPage };
})();

export default layout;
