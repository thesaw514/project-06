// Theodore Sawyer, FEND - Project 06: 'MyReads: A Book Tracking App' / index.js / 09.29.18

import React, {Component} from 'react';
export const MyContext = React.createContext();

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      books:[],
      currentlyReading:[],
      wantToRead:[],
      read:[],
        addBooks: books => {
          const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
          const read = books.filter(book => book.shelf === 'read');
          const wantToRead = books.filter(book => book.shelf === 'wantToRead');
          this.setState({books, currentlyReading, read, wantToRead});
      }
    };
  }

  render() {
    return (<MyContext.Provider value={{...this.state}}>
      {this.props.children}
    </MyContext.Provider>
    );
  }
}