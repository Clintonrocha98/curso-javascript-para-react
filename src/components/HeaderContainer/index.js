import './style.css';
import PlayerInfo from '../PlayerInfo';

export default function HeaderContainer() {
  return `
    <header class="header-container">
        <div class="left">
            ${PlayerInfo('Player1', 1)}
        </div>
        <p class="vs">VS<p>
        <div class="rigth">
            ${PlayerInfo('Player2', 1)}
        </div>
    </header>
`;
}
