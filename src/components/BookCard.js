import Selector from './Selector';
const BookCard = ({ book, shelf, onBookMove }) => {
    console.log("fromBooksdai")
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                <li>
                    <div className="book" >
                        <div className="book-top">
                            <div
                                className="book-cover"
                                onClick={() => openInNewTab(book.previewLink)}
                                style={{
                                    width: 128,
                                    height: 193,
                                
                                    backgroundImage:
                                        `url(${book.imageLinks.smallThumbnail})`,
                                }}
                            ></div>
                            <Selector book={book} shelf={shelf} onBookMove={onBookMove} />

                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
            </ol>
        </div>
    )
    function openInNewTab(url) {
        window.open(url, '_blank');
    }
}
export default BookCard