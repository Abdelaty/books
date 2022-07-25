import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom';

class BookLists extends Component {
    render() {
        const { bookShelves, books, onBookMove } = this.props;
        return (
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                    <div className="search-icon">
                        <Link to="search">
                            <figure>
                                <img alt='Search' src={"../icons/search-icon.svg"} />
                            </figure>
                        </Link>

                    </div>
                </div>
                <div className="list-books-content">
                    {bookShelves.map(shelf => (
                        <BookShelf
                            key={shelf.key}
                            shelf={shelf}
                            books={books}
                            onBookMove={onBookMove}
                        />
                    ))}
                    {/* </div> */}
                </div>
            </div >

        );
    }
}

export default BookLists;
