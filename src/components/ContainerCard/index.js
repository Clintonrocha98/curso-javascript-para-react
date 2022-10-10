import FrontBackCard from '../FrontBackCard';
import './style.css';

function ContainerCard(amountCards) {
  return `
        <div class="container-card">
            ${FrontBackCard().repeat(amountCards)}
        <div>
    `;
}
export default ContainerCard;
