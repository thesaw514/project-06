// Theodore Sawyer, FEND - Project 06: 'MyReads: A Book Tracking App' / Fab.js / 09.29.18

import React, {Component} from 'react';

export default class Fab extends Component {
  render() {
    return(<div className="open-search">
      <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
    </div>
    );
  }
}
