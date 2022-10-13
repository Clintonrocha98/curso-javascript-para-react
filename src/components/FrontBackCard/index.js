import CardGame from '../CardGame';
import './style.css';

export default function FrontBackCard(icon, altIcon) {
  return `
      <article class="card-front-back">
          <div class="card -front">
              ${CardGame()}
          </div>
          <div class="card -back">
              ${CardGame(icon, altIcon)}
          </div>
      </article>
    `;
}
