import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';
import registerServiceWorker from './registerServiceWorker';


const URLS = [
  'http://localhost:3001/status/500',
  'http://localhost:3001/status/200',
  'http://localhost:3001/status/404'
];

ReactDOM.render(
  <App urls={URLS}/>,
  document.getElementById('root')
);
registerServiceWorker();
