import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = {videos: []}

    handleSearchBarSubmit = async (searchTerm) =>{
        const youTubeResponse = await youtube.get('/search',{
            params:{
                q: searchTerm
            }
        });
        this.setState({videos: youTubeResponse.data.items});
    ;}

    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.handleSearchBarSubmit} />
                <VideoList videos={this.state.videos} />
            </div> 
        );
    }
}

export default App;