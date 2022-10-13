import './style.css';
import HeaderContainer from '../HeaderContainer';
import ContainerCard from '../ContainerCard';

export default function ContainerApp() {
  return `
  <div class="app-container">
      ${HeaderContainer()}
      ${ContainerCard()}
  </div>
`;
}
