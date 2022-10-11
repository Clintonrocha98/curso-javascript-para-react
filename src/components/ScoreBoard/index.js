import './style.css';

export default function ScoreBoard(point) {
  if (point === 1) {
    return `
        <div class="placar">
            <div class="point marcado"></div>
            <div class="point"></div>
            <div class="point"></div>
        </div>
    `;
  } if (point === 2) {
    return `
        <div class="placar">
            <div class="point marcado"></div>
            <div class="point marcado"></div>
            <div class="point"></div>
        </div>
    `;
  } if (point === 3) {
    return `
        <div class="placar">
            <div class="point marcado"></div>
            <div class="point marcado"></div>
            <div class="point marcado"></div>
        </div>
    `;
  }
  return `
    <div class="placar">
        <div class="point"></div>
        <div class="point"></div>
        <div class="point"></div>
    </div>
    `;
}
