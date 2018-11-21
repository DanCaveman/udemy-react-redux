import React from 'react';

class SearchBar extends React.Component {
    state = {searchTerm: ''};

    handleInputChange = (event) => {
        this.setState({searchTerm: event.target.value});
    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSearchSubmit(this.state.searchTerm);
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.handleFormSubmit} className="ui form" >
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={this.state.searchTerm}
                            onChange={this.handleInputChange} />
                    </div>
                </form>                
            </div>
        );
    }
}

export default SearchBar;