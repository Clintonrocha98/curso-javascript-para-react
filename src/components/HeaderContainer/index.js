import './style.css';
import PlayerInfo from '../PlayerInfo';

export default function HeaderContainer(point1 = 0, point2 = 0) {
  return `
    <header class="header-container">
        <div 
            class="indicador"
            data-currentPlayer="1"
        >V</div>
        <div class="left">
            ${PlayerInfo('Player1', point1)}
        </div>
        <p class="vs">VS<p>
        <div class="rigth">
            ${PlayerInfo('Player2', point2)}
        </div>
    </header>
`;
}
