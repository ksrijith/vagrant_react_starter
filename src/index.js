import React from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/global.css'
ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))
registerServiceWorker()