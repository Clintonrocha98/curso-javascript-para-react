import ScoreBoard from '../ScoreBoard';

export default function PlayerInfo(player, point) {
  return `
    <h1 class="player">${player}</h1>
    ${ScoreBoard(point)}
`;
}
