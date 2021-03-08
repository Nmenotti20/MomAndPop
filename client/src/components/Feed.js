import React, { useEffect, useState } from 'react';
import "./Feed.css";
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <div>
            <Post />
        </div>
    )
}

export default Feed
