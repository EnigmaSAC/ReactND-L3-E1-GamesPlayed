import React from 'react'
import SectionHeader from './SectionHeader'
import PlayerSubmissionForm from './PlayerSubmissionForm'
import PlayersList from './PlayersList'
import ShowOrHideButton from './ShowOrHideButton'

class GamesPlayedDashboard extends React.Component {
	state = {
		players:[
			{firstName: 'Sergio', lastName: 'Cabral', username: 'scabralo', gamesCount: 0},
			{firstName: 'Antonio', lastName: 'Ogando', username: 'enigmasac', gamesCount: 0},
		],
		showGames: true
	}
	toggleGamesCount = () => {
		this.setState(() => ({
			showGames: (this.state.showGames ? false : true)
		}))
		console.log(`showGames is now ${!this.state.showGames}`)
	}
	addPlayer = (player) => {
		if (this.isDuplicated(player) <= 0) {
			let arr = this.state.players
			arr.push(player)
			this.setState(() => ({
				players: arr
			}))
			console.log('Players', arr)
		} else {
			//show a message
			alert(`Username: ${player.username} is already being used, please select a new one!`)
		}
	}
	isDuplicated = (playerObj) => {
		return this.state.players.filter((player) => player.username === playerObj.username)
	}
	render() {
		const {players, showGames} = this.state
		return (
			<div>
				<SectionHeader headerText={'Add a Player'} />
				<PlayerSubmissionForm addPlayer={this.addPlayer} />
				<PlayersList players={players} showGames={showGames} />
				<ShowOrHideButton onClickHandler={this.toggleGamesCount} buttonText={showGames ? 'Hide the Number of Games Played' : 'Show the Number of Games Played'} />
			</div>
		)
	}
}

export default GamesPlayedDashboard