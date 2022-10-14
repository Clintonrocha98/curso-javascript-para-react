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
  if (cardsActive.length === 2) {
    const cardimg = document.querySelectorAll('.card-front-back.-active>.card.-back>.card-game>.cardImg');
    console.log(cardimg);
    // cardimg.forEach((card1, card2) => {
    //   const atributImg = card1.getAttribute('src');
    //   const atributImg2 = card2.getAttribute('src');
    //   if (atributImg === atributImg2) {
    //     console.log('oi');
    //   }
    // });
  }
}
cardfrontback.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('-active');
    RotateCard();
    CompareLetter();
  });
});
