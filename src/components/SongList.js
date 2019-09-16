import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songsProp.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => {this.props.selectedSongProp(song)}} >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        <p>
                            {song.title}
                            <br />
                            {song.duration}
                        </p>
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}


// takes in the state as a param to analyze what is currently in the state and converting it to props for this component
const mapStateToProps = (state) => {
    return {songsProp: state.songs};
};

//The connect function -> connect()()
// the second arguement is reserved for exporting whatever component connect is being called on
// the first arguement takes in the mapStateToProps function to update the state, and an object of action creators to pass on as props for this component
// ex. {selectedSong: selectSong}
//           ^             ^
//       prop name   action creator

export default connect(mapStateToProps, {selectedSongProp: selectSong})(SongList);