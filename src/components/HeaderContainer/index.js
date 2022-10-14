import './style.css';
import PlayerInfo from '../PlayerInfo';

export default function HeaderContainer() {
  return `
    <header class="header-container">
        <div 
            class="indicador"
            data-currentPlayer="1"
        >V</div>
        <div class="left">
            ${PlayerInfo('Player1', 0)}
        </div>
        <p class="vs">VS<p>
        <div class="rigth">
            ${PlayerInfo('Player2', 0)}
        </div>
    </header>
`;
}
