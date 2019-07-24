import React from 'react'
import PropTypes from 'prop-types'
import SectionHeader from './SectionHeader'
import PlayersListItem from './PlayersListItem'

class PlayersList extends React.Component {
	render() {
		return (
			<div>
				<SectionHeader headerText={"Player's List"} />
				<ol>
					<PlayersListItem username={'username1'} gamesCount={0} />
					<PlayersListItem username={'username2'} gamesCount={0} />
					<PlayersListItem username={'username3'} gamesCount={0} />
				</ol>
			</div>
		)
	}
}

PlayersList.propTypes = {
	players: PropTypes.array.isRequired
}

export default PlayersList