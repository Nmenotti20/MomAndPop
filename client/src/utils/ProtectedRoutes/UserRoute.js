import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function UserRoute({ user: user, component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (user.loggedInAs === "user" && user.token) {
                return <Component />
            } else {
                return <Redirect to={{ pathname: '/', state: {from: props.location} }} />
            }
        }}/>
    )
}

export default UserRoute;