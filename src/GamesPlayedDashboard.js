import React from 'react'
import SectionHeader from './SectionHeader'
import PlayerSubmissionForm from './PlayerSubmissionForm'

class GamesPlayedDashboard extends React.Component {
	render() {
		return (
			<div>
				<SectionHeader headerText={'Add a Player'} />
				<PlayerSubmissionForm />
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