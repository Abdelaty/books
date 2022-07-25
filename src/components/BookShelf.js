import BookCard from "./BookCard"
const BookShelf = props => {
    const { shelf, books, onBookMove } = props;
    const currentShelfBooks = books.filter(book => book.shelf === shelf.key);
    console.log("Book Shelf" + onBookMove)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            {
                currentShelfBooks.map((book) => <BookCard key={book.id} book={book} shelf={shelf.key} onBookMove={onBookMove} />)
            }
        </div>

    )
}
export default BookShelf 