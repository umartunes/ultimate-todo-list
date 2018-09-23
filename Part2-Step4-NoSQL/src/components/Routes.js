import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'


import Dashboard from './Dashboard';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
class Routes extends Component {

	render() {
		return (
			<Fragment>
				<Switch>
					<Route exact={true} path="/" component={Dashboard} />
					<Route exact={true} path="/create" component={AddTodo} />
					<Route exact={true} path="/edit/:id" component={EditTodo} />
				</Switch>
			</Fragment>
		)
	}

}

export default Routes;
