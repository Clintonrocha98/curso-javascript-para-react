import './src/styles/settings/colors.css';

import './src/styles/generic/reset.css';

import './src/styles/elements/base.css';

import ContainerApp from './src/components/ContainerApp';

const $app = document.querySelector('#app');
$app.insertAdjacentHTML('beforeend', `${ContainerApp()}`);

const cardfrontback = document.querySelectorAll('.card-front-back');

function ArrowDown() {
  const arrow = document.querySelector('.indicador');
  const currentPlayer = arrow.getAttribute('data-currentplayer');
  arrow.setAttribute('data-currentPlayer', currentPlayer === '1' ? '0' : '1');
}
function RotateCard() {
  const cardsActive = document.querySelectorAll('.card-front-back.-active');
  if (cardsActive.length === 2) {
    setTimeout(() => {
      cardsActive.forEach((item) => {
        item.classList.remove('-active');
      });
    }, 550);
    ArrowDown();
  }
}
function CompareLetter() {
  const cardsActive = document.querySelectorAll('.card-front-back.-active');
  const cardimg = document.querySelectorAll('.card-front-back.-active>.card.-back>.card-game>.cardImg');
  if (cardsActive.length === 2) {
    const cardimg1 = cardimg[0].getAttribute('src');
    const cardimg2 = cardimg[1].getAttribute('src');
    return cardimg1 === cardimg2;
  }
  if (cardsActive.length === 4) {
    const cardimg1 = cardimg[2].getAttribute('src');
    const cardimg2 = cardimg[3].getAttribute('src');
    return cardimg1 === cardimg2;
  }
  if (cardsActive.length === 6) {
    const cardimg1 = cardimg[4].getAttribute('src');
    const cardimg2 = cardimg[5].getAttribute('src');
    return cardimg1 === cardimg2;
  }
}
cardfrontback.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('-active');
    if (CompareLetter() === false) {
      RotateCard();
    }
  });
});
