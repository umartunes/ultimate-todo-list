import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { setOptions } from '../redux/actions/actions-options'

class InitializeApp extends Component {

	componentDidMount = () => {
		const { dispatch } = this.props
		//Hide Loading of Webpage after 500 miliseconds for a good visual
		setTimeout(() => window.hideLoading(), 500)
		
	}
	render() {
		return <React.Fragment></React.Fragment>
	}
}

export default connect()(InitializeApp);
