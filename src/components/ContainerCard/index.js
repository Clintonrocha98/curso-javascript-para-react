import FrontBackCard from '../FrontBackCard';
import cards from './data';
import './style.css';

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ContainerCard() {
  const htmlCardsList = cards.map((card) => FrontBackCard(card.icon, card.altIcon));
  const htmlCards = shuffleArray(htmlCardsList).join('');
  return `
        <div class="container-card">
            ${htmlCards}
        <div>
    `;
}
