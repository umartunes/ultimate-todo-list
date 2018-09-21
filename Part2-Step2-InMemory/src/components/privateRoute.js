import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Login from './Login'
// import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthanicated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthanicated ? (
                <div>
                    {/* <Header /> */}
                    <Component {...props} />
                </div>
            ) : (
                    <Login />
                )
        )} />
    );

const mapStateToProps = (state) => ({
    isAuthanicated: state.auth.loggedIn
});

export default connect(mapStateToProps)(PrivateRoute);