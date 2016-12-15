import React from 'react';
import ReactDOM from 'react-dom';
import routes from './config/routes.jsx'
console.log(process.env);

ReactDOM.render(
  routes,
  document.getElementById('app')
);
