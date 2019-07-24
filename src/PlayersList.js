import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import PlayersListItem from './PlayersListItem'

class PlayersList extends React.Component {
	render() {
		const {players, showGames} = this.props
		return (
			<div>
				<SectionHeader headerText={"Player's List"} />
				<ol>
					{players.map((player) => <PlayersListItem key={player.username} username={player.username} gamesCount={showGames ? player.gamesCount.toString() : '\\*'} />)}
				</ol>
			</div>
		)
	}
}

PlayersList.propTypes = {
	players: PropTypes.array.isRequired
}

export default PlayersList