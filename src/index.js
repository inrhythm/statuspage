import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';


const URLS = ['https://www.inrhythm.com/Give404', 'https://www.inrhythm.com/'];

ReactDOM.render(
  <App urls={URLS}/>,
  document.getElementById('root')
);
registerServiceWorker();
