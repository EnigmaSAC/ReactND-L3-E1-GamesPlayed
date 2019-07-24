import React from 'react'
import PropTypes from 'prop-types'

const PlayersListItem = props => {
	const {player} = props
	return (
		<li key={player.username}>`${player.username} played ${player.games} games.`</li>
	)
}

PlayersListItem.propTypes = {
	player: PropTypes.object.isRequired
}

export default PlayersListItem