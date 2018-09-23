import React, { Component } from 'react'
import { connect } from 'react-redux'

class InitializeApp extends Component {

	componentDidMount = () => {

		// if( ! window.isMobile ){
		// 	document.body.style.minWidth = "1000px"
		// }

		//Hide Loading of Webpage after 500 miliseconds for a good visual
		setTimeout(() => window.hideLoading(), 500)


	}

	render() {
		return <React.Fragment></React.Fragment>
	}

}

export default connect()(InitializeApp);
