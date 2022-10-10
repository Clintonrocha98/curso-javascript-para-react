import './style.css';
import HeaderContainer from '../HeaderContainer';
import ContainerCard from '../ContainerCard';

function ContainerApp() {
  const htmlContainerApp = `
        <div class="app-container">
            ${HeaderContainer()}
            ${ContainerCard(6)}
        </div>
    `;

  return htmlContainerApp;
}
export default ContainerApp;
