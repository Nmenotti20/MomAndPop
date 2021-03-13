import React from 'react';

const UserContext = React.createContext({
    token: '',
    loggedInAs: '',
    name: '',
    changeUser: () => {}
})

export default UserContext;