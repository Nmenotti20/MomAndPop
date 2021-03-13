import React from 'react';

const UserContext = React.createContext({
    token: '',
    loggedInAs: '',
    name: '',
    image: '',
    changeUser: () => {}
})

export default UserContext;