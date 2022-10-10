import './src/styles/settings/colors.css';

import './src/styles/generic/reset.css';

import './src/styles/elements/base.css';

import ContainerApp from './src/components/ContainerApp';

const $app = document.querySelector('#app');
$app.insertAdjacentHTML('beforeend', `${ContainerApp()}`);
