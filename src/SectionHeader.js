import React from 'react'
import PropTypes from 'prop-types'

const SectionHeader = (props) => {
	return (
		<h2>{props.headerText}</h2>
	)
}

SectionHeader.propTypes = {
	headerText: PropTypes.string.isRequired
}

export default SectionHeader