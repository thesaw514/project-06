// Theodore Sawyer, FEND - Project 06: 'MyReads: A Book Tracking App' / Fab.js / 09.29.18

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Fab extends Component {
  render() {
    return(
      <div className="open-search">
        <Link to={'/search'}>Add a book</Link>
    </div>
    );
  }
}
