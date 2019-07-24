import React from 'react'
import PropTypes from 'prop-types'

const PlayersListItem = props => {
	const {username, gamesCount} = props
	return (
		<li key={username}>{username} played {gamesCount} games.</li>
	)
}

PlayersListItem.propTypes = {
	username: PropTypes.string.isRequired,
	gamesCount: PropTypes.number.isRequired
}

export default PlayersListItem