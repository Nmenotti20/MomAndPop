import React from 'react';
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";

function MessageSender() {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input
                        className="messageSender_input"
                        placeholder="Leave a comment here."
                    />
                    <button className="btn-primary" onClick={handleSubmit} type="submit">Post</button>
                </form>

            </div>
            <div className="messageSender_bottom">

            </div>

        </div>
    )
}

export default MessageSender;
