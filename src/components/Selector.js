
import { Component } from 'react';
class Selector extends Component {
    state = {
        value: this.props.shelf
    };
    onSelectedOptionChanged = event => {
        console.log(this.props)
        const { value } = event.target;
        this.setState({ value });
        this.props.onBookMove(this.props.book, value);
    };
    render() {
        return (<div className="book-shelf-changer">
            <select value={this.state.value} onChange={this.onSelectedOptionChanged}>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading" >
                    Currently Reading
                </option>
                <option value="wantToRead" >Want to Read</option>
                <option value="read" >Read</option>
                <option value="none">None</option>
            </select>
        </div>)
    }

};
export default Selector;