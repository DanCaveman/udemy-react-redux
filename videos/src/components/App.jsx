import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = {videos: [], selectedVideo: null}

    handleSearchBarSubmit = async (searchTerm) =>{
        const youTubeResponse = await youtube.get('/search',{
            params:{
                q: searchTerm
            }
        });
        this.setState({videos: youTubeResponse.data.items});
    };

    handleVideoSelected = (video) =>{
        this.setState({selectedVideo: video});        
    };

    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.handleSearchBarSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={this.handleVideoSelected} 
                    videos={this.state.videos} />
            </div> 
        );
    };
}

export default App;