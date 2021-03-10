import React from 'react'
import StarRating from './StarRating'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import "./LocalBusiness.css";

function LocalBusiness() {
    return (
        <div className="business ">
            <div className="business_top">
                <div className="business_topInfo">
                    <h3>Business Name:</h3>
                    <p>Business Description:</p>
                    <p>Zip Code:</p>
                </div>
            </div>

            <div className="post_options">
                <div className="post_option">
                    <StarRating />
                </div>
                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
            </div>
        </div>
    )
}

export default LocalBusiness
