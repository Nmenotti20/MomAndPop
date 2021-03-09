import React, { useEffect, useState } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([]);

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
