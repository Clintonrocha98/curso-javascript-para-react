import './style.css';
import HeaderContainer from '../HeaderContainer';
import ContainerCard from '../ContainerCard';

export default function ContainerApp(point1, point2) {
  return `
  <div class="app-container">
      ${HeaderContainer(point1, point2)}
      ${ContainerCard()}
  </div>
`;
}
