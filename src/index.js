import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const axios = require('axios').default;
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('process.env',process.env)
axios.get('http://'+process.env.REACT_APP_HOST+':8000/cards')
  .then(function (response) {
    console.log(response.data)
    root.render(
  <React.StrictMode>
    <App cards={response.data}/>
  </React.StrictMode>
);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  }) 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
