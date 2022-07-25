import SearchInput from '../components/SeachInput';
import SearchGrid from '../components/SearchGrid';
import CloseComponent from '../components/CloseComponent';
import { Component } from 'react';
class SearchScreen extends Component {
    render() {
        const { allBooks, onSearch, searchBooks, onBookMove } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <CloseComponent />
                    <SearchInput onSearch={onSearch} />
                </div>
                <SearchGrid
                    searchBooks={searchBooks}
                    allBooks={allBooks}
                    onBookMove={onBookMove} />
            </div>
        )
    }
}
export default SearchScreen
