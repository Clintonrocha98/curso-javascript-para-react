import PlayerInfo from "../PlayerInfo"

function HeaderContainer(){
    const htmlPlayerInfo = PlayerInfo(1)
    const htmlPlayerInfo2 = PlayerInfo(2)
    const htmlHeaderContainer = `
        <header class="header-container">
            ${htmlPlayerInfo}
            <p>VS<p>
            ${htmlPlayerInfo2}
        </header>
    `
    return htmlHeaderContainer
}

export default HeaderContainer;