import React from 'react';
import classNames from 'classnames';
import './SongRowItem.css';

const SongRowItem = ({song, onSelectSong, isSelected}) => {
    var songRowClass = classNames("item", {selectedItem: isSelected});
    return (
        <div className={songRowClass}>
            <div className="right floated content">
                <button className="ui button primary" onClick={() => onSelectSong(song)}>Select</button>
            </div>
            <div className="content">{song.title}</div>
        </div>
    );
}

export default SongRowItem;