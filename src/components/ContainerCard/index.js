import CardGame from "../CardGame"

function ContainerCard(amountCards){
    const htmlCardGame = CardGame()
    const htmlContainerCard = `
        <div class="container-card">
            ${htmlCardGame.repeat(amountCards)}
        <div>
    `
    return htmlContainerCard;
}
export default ContainerCard;