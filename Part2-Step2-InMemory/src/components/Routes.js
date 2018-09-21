import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import AddTodo from './AddTodo';

class Routes extends Component {

	render() {
		return (
			<Fragment>
				<Switch>
					<Route exact={true} path="/" component={Dashboard} />
					<Route exact={true} path="/create" component={AddTodo }/>
				</Switch>
			</Fragment>
		)
	}

}

export default Routes;
