// Theodore Sawyer, FEND - Project 06: 'MyReads: A Book Tracking App' / index.js / 09.29.18

import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import App from './App'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
