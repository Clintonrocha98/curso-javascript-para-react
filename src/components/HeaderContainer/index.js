import './style.css';
import PlayerInfo from '../PlayerInfo';

function HeaderContainer() {
  return `
        <header class="header-container">
            <div class="left">
                ${PlayerInfo(1)}
            </div>
            <p class="vs">VS<p>
            <div class="rigth">
                ${PlayerInfo(2)}
            </div>
        </header>
    `;
}

export default HeaderContainer;
