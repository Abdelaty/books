import { Component } from 'react';

class SearchInput extends Component {
    state = { value: '' }
    handleChange = event => {
        const v = event.target.value;
        this.setState({ value: v }, () => {
            this.props.onSearch(v);
        });
    };
    render() {
        return (<div className="search-books-input-wrapper" >
            <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={this.state.value}
                onChange={this.handleChange}
            />
        </div>)
    }
}
export default SearchInput;
