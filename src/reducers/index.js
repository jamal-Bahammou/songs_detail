import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{
			title: 'Miyagi & Эндшпиль feat. Рем Дигга - I Got Love',
			duration: '4:34'
		},
		{ title: 'TWICE "FANCY" M/V', duration: '3:38' },
		{ title: 'BTS (방탄소년단) FAKE LOVE Official MV', duration: '5:18' },
		{
			title: 'French Montana - Unforgettable ft. Swae Lee',
			duration: '4:46'
		},
		{ title: 'Imagine Dragons - Believer', duration: '3:36' },
		{ title: 'Dua Lipa & BLACKPINK - Kiss and Make Up', duration: '3:09' },
		{ title: 'EXO 엑소 Love Shot MV', duration: '3:29' },
		{ title: 'Billie Eilish - bad guy', duration: '3:25' },
		{ title: 'French Montana - No Stylist ft. Drake', duration: '3:32' },
		{ title: 'Shayfeen - Kan Kits7abhoum', duration: '4:30' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
