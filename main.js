import CardGame from "./src/components/CardGame"
// import PlayerScore from "./src/components/PlayerScore"

const $app = document.querySelector("#app")
const htmlCardGame = CardGame()

$app.insertAdjacentHTML("beforeend", htmlCardGame)