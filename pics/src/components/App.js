import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


// access key = 8603082c4200a6e4b95cb4da03b1f02fdea38e29ca0622da6594d9ff21ea3df8
// secret key = fda680931881e9ee24ce8e45bfca65ed37da43d704f9d02589b6a1eaab8615cb
class App extends React.Component {
    state = {images: []};
    
    handleSubmit = async (term) =>{
        const response = await unsplash.get('/search/photos',{
            params: {query: term},
         });

        this.setState({images: response.data.results});
    };

    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.handleSubmit} />
                <ImageList images={this.state.images} />
            </div>            
        );
    }
};

export default App;