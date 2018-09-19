import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import Login from './Login'
import Dashboard from './Dashboard';
import AddTodo from './AddTodo';
class Routes extends Component {

	render() {
		return (
			<Fragment>
				<Switch>
					<PrivateRoute  exact={true} path="/" component={Dashboard} />
					{/* <Route exact={true} path ="/dashboard" component={Dashboard}/> */}
					<PrivateRoute exact={true} path="/create" component={AddTodo }/>

				</Switch>
			</Fragment>
		)
	}

}

export default Routes;
