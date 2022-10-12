import FrontBackCard from '../FrontBackCard';
import './style.css';

export default function ContainerCard(amountCards) {
  return `
        <div class="container-card">
            ${FrontBackCard().repeat(amountCards)}
        <div>
    `;
}
