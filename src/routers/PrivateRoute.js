import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from "../components/Header";

export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest //remaining props
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
            <Header />
            <Component {...props} />
            </div>//render component if authenticated
        ) : (
            <Redirect to="/" /> //redirect if not auth.
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);