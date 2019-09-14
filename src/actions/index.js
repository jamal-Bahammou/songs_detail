// 💣💥 THE ACTION IS WENT A USER SELECT SONG 💣💥
// ACTION CREATOR
export const selectSong = song => {
	// RETURN AN ACTION
	// ADD THE LIST OF SONG TO THE STATE
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
