import React from 'react';

const UserContext = React.createContext({
    token: '',
    loggedInAs: '',
    changeUser: () => {}
})

export default UserContext;