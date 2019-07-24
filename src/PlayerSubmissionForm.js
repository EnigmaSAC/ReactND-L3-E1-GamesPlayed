import React from 'react'
import PropTypes from 'prop-types'
import Player from './PlayerClass'

class PlayerSubmissionForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        buttonEnabled: false
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
                <input id="first" type='text' className='first-name' placeholder='First Name' value={firstName} onChange={(event) => this.onChangeHandler(event.target.id, event.target.value)}/>
                <input id="last" type='text' className='last-name' placeholder='Last Name' value={lastName} onChange={(event) => this.onChangeHandler(event.target.id, event.target.value)}/>
                <input id="user" type='text' className='username' placeholder='Username' value={username} onChange={(event) => this.onChangeHandler(event.target.id, event.target.value)}/>
                <button onClick={()=>(addPlayer(this.createPlayer(firstName, lastName, username)))}>Add Player</button>
			</div>
		)
	}
}

PlayerSubmissionForm.propTypes = {
    addPlayer: PropTypes.func.isRequired
}

export default PlayerSubmissionForm