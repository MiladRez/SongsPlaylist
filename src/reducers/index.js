import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title: 'Going Bad', duration: '4:15'},
        {title: 'Money in the Grave', duration: '3:50'},
        {title: 'God\'s Plan', duration: '2:55'},
        {title: 'Mob Ties', duration: '3:27'}
    ];
};

const selectedSongReducer = (selectedSong = null, actions) => {
    if(actions.type === 'SONG_SELECTED') {
        return actions.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});