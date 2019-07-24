import React from 'react'
import PropTypes from 'prop-types'

const ShowOrHideButton = props => {
	const {onClickHandler, buttonText} = props
	return (
		<button onClick={onClickHandler}>{buttonText}</button>
	)
}

ShowOrHideButton.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClickHandler: PropTypes.func.isRequired
}

export default ShowOrHideButton