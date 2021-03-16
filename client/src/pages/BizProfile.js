import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";
import BusinessOwner from "../images/Petersons_Donughts_Img.png";
import { Card } from "react-bootstrap";
import Feed from "../components/Feed";
import StarRating from "../components/StarRating";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import API from '../utils/API/businessAPI';

function BizProfile() {
  const [business, setBusiness] = useState({})

  useEffect(() => {
    API.find()
      .then(res => {
        console.log(res.data)
        setBusiness({
          ...business,
          ...res.data
        })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-center h-100">
        <Card className="card">
          <Card.Img variant="top" src={`/api/uploads/${business.image}`} />
          <Card.Body>
            <Card.Title>
              <h1>{business.companyName}</h1>
            </Card.Title>
            <Card.Text>
              <h4>{business.service}</h4>
              <h5>{business.streetAddress}</h5>
              <h5>{business.city}, {business.state} {business.zipCode}</h5>
              <br/>
              <h5>Phone: {business.phone}</h5>
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <div className="form-group">
              <h4><Card.Link href={business.website} target="_blank">{business.website}</Card.Link></h4>
              <div className="post_options">
                <div className="post_option">
                  <StarRating />
                </div>
                <div className="post_option">
                  <ChatBubbleOutlineIcon />
                  <p>View Comments</p>
                </div>
              </div>
              <input
                type="submit"
                value="Edit Profile"
                className="btn float-right edit_btn"
              />
            </div>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className="container"></div>
    </div>
  );
}

export default withRouter(BizProfile);
