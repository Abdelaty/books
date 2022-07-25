import React from 'react';
import BookCard from './BookCard';

const SearchGrid = (props) => {
    var updatedBooks
    const { searchBooks, allBooks, onBookMove } = props;
    try {
        updatedBooks = searchBooks.map(book => {
            allBooks.map(a => {
                if (a.id === book.id) {
                    book.shelf = a.shelf;
                }
                return a;
            });
            return book;
        });
    }
    catch (error) {
        updatedBooks = []
    }

    return updatedBooks.length>0?(
        <div className="search-books-results">
            <ol className="books-grid">
                {
                    updatedBooks.map(book => (
                        <BookCard
                            key={book.id}
                            book={book}
                            shelf={book.shelf ? book.shelf : 'none'}
                            onBookMove={onBookMove}
                        />
                    ))
                }
            </ol>
        </div>
    ):<div className='error-message'><h1>We are sorry there's no books now, Start searching or search for another book</h1></div>;



};
export default SearchGrid;
