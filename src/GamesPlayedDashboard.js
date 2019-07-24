import React from 'react'
import SectionHeader from './SectionHeader'
import PlayerSubmissionForm from './PlayerSubmissionForm'
import PlayersList from './PlayersList'
import ShowOrHideButton from './ShowOrHideButton'

class GamesPlayedDashboard extends React.Component {
	render() {
		return (
			<div>
				<SectionHeader headerText={'Add a Player'} />
				<PlayerSubmissionForm />
				<PlayersList />
				<ShowOrHideButton onClickHandler={()=> console.log('Show Or Hide clicked!')} buttonText={'Hide the Number of Games Played'} />
				{
				//<SectionHeader />
				//<PlayerSubmissionForm />
				//<PlayersList />
				//	<PlayersListItem />
				//	<PlayersListItem />
				//<ShowOrHideButton />
				}
			</div>
		)
	}
}

export default GamesPlayedDashboard