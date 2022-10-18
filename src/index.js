import React from 'react';
import ReactDOM from 'react-dom';
import { StateMachineProvider, createStore } from 'little-state-machine'

import reportWebVitals from './reportWebVitals';
import App from './App';

import './index.css';


createStore({
  data: {
    companyName: '',
    cost: '',
    currency: '',
    codename: '',
  }
});



ReactDOM.render(
  <React.StrictMode>
    <StateMachineProvider>
      <App />
    </StateMachineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
