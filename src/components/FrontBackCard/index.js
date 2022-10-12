import CardGame from '../CardGame';
import './style.css';

export default function FrontBackCard() {
  return `
      <article class="card-front-back">
          <div class="card -front">
              ${CardGame()}
          </div>
          <div class="card -back">
              ${CardGame('css', 'logo css')}
          </div>
      </article>
    `;
}
