import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {
    state = {videos: [], selectedVideo: null}

    componentDidMount() {
        this.handleSearchBarSubmit('buildings');
    };
    handleSearchBarSubmit = async (searchTerm) =>{
        const youTubeResponse = await youtube.get('/search',{
            params:{
                q: searchTerm
            }
        });
        this.setState(
            {
                videos: youTubeResponse.data.items,
                selectedVideo: youTubeResponse.data.items[0]
            });
    };

    handleVideoSelected = (video) =>{
        this.setState({selectedVideo: video});        
    };

    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.handleSearchBarSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.handleVideoSelected} 
                                videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div> 
        );
    };
}

export default App;