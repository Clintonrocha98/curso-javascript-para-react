import CardGame from "./src/components/CardGame"
import "./src/css/styles.css"
// import PlayerScore from "./src/components/PlayerScore"

const $app = document.querySelector("#app")
const htmlCardGame = CardGame()

$app.insertAdjacentHTML("beforeend", htmlCardGame)