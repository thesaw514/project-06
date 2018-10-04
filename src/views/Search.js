// Theodore Sawyer, FEND - Project 06: 'MyReads: A Book Tracking App' / Search.js / 09.29.18

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {search} from '../BooksAPI';
import Book from '../components/Book';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      books: []
    }
  }

  handleChange = async e =>{
    try {
      const query = e.target.value;
        this.setState({query});

      if(query.trim()) {
        const results = await search(query);

        if(results.error) {
          this.setState({books:[]});
        } else {
          this.setState({books: results});
        }
      } else {
        this.setState({books: []});
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return(<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={'/'}>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.length > 0 &&
              this.state.books.map(book => {
                const foundShelf = this.props.books.find(searchBook => searchBook.id === book.id);

                if(foundShelf) {
                  book.shelf = foundShelf.shelf;
                } else {
                  book.shelf = 'none';
                }

                return (<Book key={book.id} {...book} moveBook={this.props.moveBook}/>);
              }
            )}
            {this.state.books.length === 0 && <h1 style={{textAlign: 'center'}}>No Results Found</h1>}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
