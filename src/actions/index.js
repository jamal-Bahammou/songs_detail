// ACTION CREATOR
export const selectSong = song => {
	// RETURN AN ACTION
	return {
		type: 'SONG_SELECTED',
		payload: song
	};
};

// NAMED EXPORT
// export const selectSong = song => {}
// import { selectSong } from '../actions'

// DEFAULT EXPORT
// export default selectSong
// import selectSong from '../actions'
