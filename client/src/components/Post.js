import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

function Post({ image, profilePic, username, timestamp, message }) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar src={profilePic} classNamee="post_avatar" />
                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>Timestamp</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt="" />
            </div>
            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
            </div>
        </div>
    )
}

export default Post