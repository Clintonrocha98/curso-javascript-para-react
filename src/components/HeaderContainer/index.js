import './style.css';
import PlayerInfo from '../PlayerInfo';

export default function HeaderContainer(currentPlayer) {
  return `
    <header class="header-container">
        <div 
            class="indicator"
            data-currentPlayer="${currentPlayer}"
        >V</div>
        <div class="left">
            ${PlayerInfo('Player1', 1)}
        </div>
        <p class="vs">VS<p>
        <div class="rigth">
            ${PlayerInfo('Player2', 0)}
        </div>
    </header>
`;
}
