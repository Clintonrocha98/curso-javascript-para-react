import './style.css';

export default function CardGame(icon = 'cat', alt = 'git icon octocat') {
  return `
      <article class="card-game">
          <img src="./img/${icon}.jpg" alt="${alt}">
      </article>
      `;
}
