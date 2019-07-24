import React from 'react'
import PropTypes from 'prop-types'
import Player from './PlayerClass'

class PlayerSubmissionForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: ''
    }
    createPlayer = (first, last, user) => {
        const newPlayer = new Player(first, last, user)
        return newPlayer
    }
    onChangeHandler = (inputId, inputValue) => {
        let inputObj = {}
        switch(inputId) {
            case 'first':
                inputObj.firstName = inputValue
                break
            case 'last':
                inputObj.lastName = inputValue
                break
            case 'user':
                inputObj.username = inputValue
                break
            default:
                break;
        }

        this.setState(() => (inputObj))
    }
	render() {
        const {addPlayer} = this.props
        const {firstName, lastName, username} = this.state
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