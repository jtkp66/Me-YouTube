import React, { Component } from 'react';
//give searchbar the class the additional funcionality of react.component
class SearchBar extends Component {
    //constructor is called when a new instance occurs, and initializes state
    constructor(props) {
        //calling parent method from Component with super
        super(props);

        this.state = { term: '' };
    }
    render() {
        //Create a new input element and pass a prop, onChange with the value this.onInputChange
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
                {/* Value of the input: {this.state.term} */}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;