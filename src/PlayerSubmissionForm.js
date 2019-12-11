import React from 'react'
import PropTypes from 'prop-types'
import Player from './PlayerClass'

class PlayerSubmissionForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        buttonDisabled: true
    }
    createPlayer = (first, last, user) => {
        const newPlayer = new Player(first, last, user)
        this.props.addPlayer (newPlayer)
        // return newPlayer
    }
    onChangeHandler = (inputId, inputValue) => {
        let newStateObj = {}
        switch(inputId) {
            case 'first':
                newStateObj.firstName = inputValue
                break
            case 'last':
                newStateObj.lastName = inputValue
                break
            case 'user':
                newStateObj.username = inputValue
                break
            default:
                break;
        }
        this.setState(() => (newStateObj))
        this.enableButton()
    }
    enableButton = () => {
        const {firstName, lastName, username} = this.state
         if (firstName.length > 0 && lastName.length > 0 && username.length > 0) {
            this.setState(()=>({
                buttonDisabled: false
            }))
         } else {
            this.setState(()=>({
                buttonDisabled: true
            }))
         }
    }
	render() {
        const {firstName, lastName, username, buttonDisabled} = this.state
		return (
			<div>
                <input id="first" type='text' className='first-name' placeholder='First Name' value={firstName} onChange={(event) => {
                    this.onChangeHandler(event.target.id, event.target.value)
                }}/>
                <input id="last" type='text' className='last-name' placeholder='Last Name' value={lastName} onChange={(event) => {
                    this.onChangeHandler(event.target.id, event.target.value)
                }}/>
                <input id="user" type='text' className='username' placeholder='Username' value={username} onChange={(event) => {
                    this.onChangeHandler(event.target.id, event.target.value)
                }}/>
                <button disabled={buttonDisabled} onClick={()=>(this.createPlayer(firstName,lastName,username))}>Add Player</button>
			</div>
		)
	}
}

PlayerSubmissionForm.propTypes = {
    addPlayer: PropTypes.func.isRequired
}

export default PlayerSubmissionForm