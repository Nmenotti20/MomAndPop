import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function BusinessRoute({ user: user, component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (user.loggedInAs === "business" && user.token) {
                return <Component />
            } else {
                return <Redirect to={{ pathname: '/', state: {from: props.location} }} />
            }
        }}/>
    )
}

export default BusinessRoute;