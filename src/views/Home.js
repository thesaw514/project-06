// Theodore Sawyer, FEND - Project 06: 'MyReads: A Book Tracking App' / Home.js / 09.29.18

import React, {Component} from 'react';
import Shelf from '../components/Shelf';
import Fab from '../components/Fab';

export default class Home extends Component {
  render() {
    return(<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf />
        </div>
          <Fab />
      </div>
    );
  }
}
