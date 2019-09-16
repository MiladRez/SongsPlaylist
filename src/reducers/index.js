import { combineReducers } from 'redux';

//Reducers

const songsReducer = () => {
    return [
        {title: 'Going Bad', duration: '4:15', artist: 'Meek Mill ft. Drake', album: 'Championship'},
        {title: 'Money in the Grave', duration: '3:50', artist: 'Drake ft. Rick Ross', album: 'Money in the Grave'},
        {title: 'God\'s Plan', duration: '2:55', artist: 'Drake', album: 'Scorpion'},
        {title: 'Mob Ties', duration: '3:27', artist: 'Drake', album: 'Scorpion'}
    ];
};

const selectedSongReducer = (selectedSong = null, actions) => {
    if(actions.type === 'SONG_SELECTED') {
        return actions.payload;
    }
    return selectedSong;
}

export default combineReducers({
    //this is basically the state
    songs: songsReducer,
    selectedSong: selectedSongReducer
});