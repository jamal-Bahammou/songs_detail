import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectSong } from '../actions';

class SongList extends Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className='item' key={song.title}>
					<div className='right floated content'>
						<button
							onClick={() => this.props.selectSong(song)} //💣💥 ADD THE ACTION TO THE BUTTON 💣💥
							className='ui button primary'
						>
							SELECT
						</button>
					</div>
					<div className='content'>{song.title}</div>
				</div>
			);
		});
	}

	render() {
		return <div className='ui divided list'>{this.renderList()}</div>;
	}
}

const mapStateToProps = state => {
	console.log('SongList:', state);
	// {
	// 	selectedSong: null,
	// 	songs: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, ...]
	// }
	return { songs: state.songs }; //💣💥 ADD THE LIST OF SONG TO THE STATE 💣💥
};

export default connect(
	mapStateToProps,
	{ selectSong }
)(SongList);
