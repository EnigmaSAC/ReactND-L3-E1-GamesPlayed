import React from 'react'

class PlayerSubmissionForm extends React.Component {
	render() {
		return (
			<div>
                <input type='text' className='first-name' placeholder='First Name' />
                <input type='text' className='last-name' placeholder='Last Name' />
                <input type='text' className='username' placeholder='username' />
                <button>Add Player</button>
			</div>
		)
	}
}

PlayerSubmissionForm.propTypes = {

}

export default PlayerSubmissionForm