import React from 'react'
import SectionHeader from './SectionHeader'
import PlayerSubmissionForm from './PlayerSubmissionForm'
import PlayersList from './PlayersList'

class GamesPlayedDashboard extends React.Component {
	render() {
		return (
			<div>
				<SectionHeader headerText={'Add a Player'} />
				<PlayerSubmissionForm />
				<PlayersList />
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