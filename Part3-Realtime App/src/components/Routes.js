import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import AddTodoPage from './AddTodoPage';
import Dashboard from './Dashboard';
import EditTodoPage from './EditTodoPage';


class Routes extends Component {

	render() {
		return (
			<Fragment>
				<Switch>
					<Route  exact={true} path="/" component={Dashboard} />
					<Route exact={true} path="/create" component={AddTodoPage }/>
					<Route exact={true} path="/edit/:id" component={EditTodoPage }/>
				</Switch>
			</Fragment>
		)
	}

}

export default Routes;
