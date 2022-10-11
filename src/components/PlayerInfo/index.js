import ScoreBoard from '../ScoreBoard';
import './style.css';

export default function PlayerInfo(player, point) {
  return `
    <h1 class="player">${player}</h1>
    <div class="warrap-placar">
        <div class="turn">V</div>
        ${ScoreBoard(point)}
    </div>
`;
}
