import FrontBackCard from '../FrontBackCard';
import cards from './data';
import './style.css';

export default function ContainerCard() {
  const htmlCardsList = cards.map((card) => FrontBackCard(card.icon, card.altIcon));
  const htmlCards = htmlCardsList.join('');
  return `
        <div class="container-card">
            ${htmlCards}
        <div>
    `;
}
