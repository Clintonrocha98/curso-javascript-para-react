import './src/styles/settings/colors.css';

import './src/styles/generic/reset.css';

import './src/styles/elements/base.css';

import ContainerApp from './src/components/ContainerApp';

const $app = document.querySelector('#app');
$app.insertAdjacentHTML('beforeend', `${ContainerApp()}`);

const cardfrontback = document.querySelectorAll('.card-front-back');

function indicador() {
  const arrow = document.querySelector('.indicador');
  const currentPlayer = arrow.getAttribute('data-currentplayer');
  arrow.setAttribute('data-currentPlayer', currentPlayer === '1' ? '0' : '1');
}
function vira() {
  const cardsActive = document.querySelectorAll('.card-front-back.-active');

  if (cardsActive.length === 2) {
    setTimeout(() => {
      cardsActive.forEach((card) => {
        card.classList.remove('-active');
      });
    }, 550);
    indicador();
  }
}
cardfrontback.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('-active');
    vira();
  });
});
