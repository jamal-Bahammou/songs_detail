import React from 'react';
import { connect } from 'react-redux';

// This is the first commit:

const SongDetail = ({ song }) => {
	if (!song) return <div>SELECT A SONG</div>;

	return (
		<div>
			<h3>DETAILS FOR:</h3>
			<p style={{ textAlign: 'center' }}>
				TITLE: {song.title}
				<br />
				DURATION: {song.duration}
			</p>
		</div>
	);
};

const mapStateToProps = state => {
	console.log('SongDetail:', state);
	// {
	// 	selectedSong: null,
	// 	songs: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, ...]
	// }
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
