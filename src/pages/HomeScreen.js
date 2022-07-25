import { React, Component } from "react";
import * as BooksAPI from '../api/BooksAPI';
import BookLists from "../components/BookLists";
import { Route, Routes } from 'react-router-dom';
import SearchScreen from './SearchScreen';

const bookShelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' }
];

class HomeScreen extends Component {

    state = {
        allBooks: [], searchBooks: [], favBooks: []
    };
    componentDidMount = () => {
        BooksAPI.getAll()
            .then(books => {
                this.setState({ allBooks: books });
            })
            .catch(err => {
                console.log(err);
            });
    };
    onBookMove = (book, shelf) => {
        BooksAPI.update(book, shelf).catch(err => {
            console.log(err);
        });
        if (shelf === 'none') {
            this.setState(prevState => ({
                allBooks: prevState.allBooks.filter(b => b.id !== book.id)
            }));
        } else {
            book.shelf = shelf;
            this.setState(prevState => ({
                allBooks: prevState.allBooks.filter(b => b.id !== book.id).concat(book)
            }));
        }
    };
    searchForBooks = (query) => {
        if (query.length > 0) {

            console.log(query);
            BooksAPI.search(query).then(books => {
                this.setState({ searchBooks: books })
            })
        } else {

            this.setState({ searchBooks: this.allBooks });
        }
    }
    render() {
        const { allBooks, searchBooks } = this.state;

        return (
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<BookLists bookShelves={bookShelves} books={allBooks} onBookMove={this.onBookMove} />
                    }
                />

                <Route
                    path="/search"
                    element={<SearchScreen
                        searchBooks={ searchBooks}
                        allBooks={allBooks}
                        onSearch={this.searchForBooks}
                        onBookMove={this.onBookMove}
                    />}
                ></Route>
            </Routes>


        );
    }
}
// function onBookMove(book, oldShelf, newShelf) {
//     if (newShelf === "wantToRead")
//         moveBookToToReadShelf(book, oldShelf)
//     else if (newShelf === "currentlyReading")
//         moveBookToReadingShelf(book, oldShelf)
//     else if (newShelf === "read")
//         moveBookToReadShelf(book, oldShelf)

// }
// function moveBookToReadingShelf(book, oldShelf) {
//     readingList.push(book)
//     setReadingList(...readingList, book)
//     removeBookFromOtherShelfes(oldShelf, book);
// }
// function moveBookToReadShelf(oldShelf, book) {
//     setReadList(...readList, book)
//     removeBookFromOtherShelfes(oldShelf, book);

// }
// function moveBookToToReadShelf(oldShelf, book) {
//     setToReadList(...toReadList, book)
//     removeBookFromOtherShelfes(oldShelf, book);

// }
// function removeBookFromOtherShelfes(oldShelf, book) {
//     switch (oldShelf) {
//         case "currentlyReading": setReadingList(readingList.filter(function (e) { return e.id !== book.id })); break;
//         case "wantToRead": setToReadList(toReadList.filter(function (e) { return e.id !== book.id })); break;
//         case "read": setReadList(readList.filter(function (e) { return e.id !== book.id })); break;
//         default:
//     }
// }

export default HomeScreen;
