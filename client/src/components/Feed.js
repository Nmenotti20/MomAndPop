import React, { useEffect } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {

    useEffect(() => {

    }, [])

    return (
        <div>
            <MessageSender />
            <Post />
        </div>
    )
}

export default Feed
