import HeaderContainer from "../HeaderContainer";
import ContainerCard from "../ContainerCard";

function ContainerApp(){
    const htmlHeaderContainer = HeaderContainer()
    const htmlContainerCard = ContainerCard(6)

    const htmlContainerApp = `
        <div class="app-container">
        ${htmlHeaderContainer}
        ${htmlContainerCard}
        </div>
    `
    
    return htmlContainerApp;
}
export default ContainerApp;