import React from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';
import SongRowItem from './SongRowItem';


class SongList extends React.Component{

    renderList = () =>{        
        return this.props.songs.map((currentSong) =>{
            var isSelected = this.props.selectedSong 
                ? currentSong.title === this.props.selectedSong.title
                : false;
            return <SongRowItem key={currentSong.title} isSelected={isSelected} song={currentSong} onSelectSong={this.props.selectSong} />
        });
    }
    render(){
            
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return{ 
        songs: state.songs 
        ,selectedSong: state.selectedSong
    };
}

export default connect(mapStateToProps, { selectSong })(SongList);