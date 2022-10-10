import CardGame from '../CardGame';
import './style.css';

function FrontBackCard() {
  return `
    <article class="card-front-back">
        ${CardGame()}
        ${CardGame('css', 'logo css')}
    </article>
  `;
}

export default FrontBackCard;
