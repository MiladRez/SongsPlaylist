import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({selectedSongProp}) => {
    if(!selectedSongProp) {
        return <div>Select a song!</div>
    }

    return (
        <div>
            <h2>Details: </h2>
            <h3>{selectedSongProp.title}</h3>
            <p><i className="user icon" />{selectedSongProp.artist}</p>
            <p><i className="dot circle icon" />{selectedSongProp.album}</p>
            <p><i className="hourglass half icon" />{selectedSongProp.duration}</p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {selectedSongProp: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);