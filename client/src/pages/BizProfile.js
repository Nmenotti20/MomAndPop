import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";

import { Card } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

import StarRatings from 'react-star-ratings'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import API from '../utils/API/businessAPI';

function BizProfile() {
  const [business, setBusiness] = useState({
    reviews: []
  })

  useEffect(() => {
    API.find()
      .then(res => {
        setBusiness({
          ...business,
          ...res.data
        })
      })
      .catch(err => console.log(err))
  }, [])

  function findAverageRating(reviews, size) {
    let total = 0
    for (let i = 0; i < reviews.length; i++) {
        total += reviews[i].rating;
    }

    if (!total) {
        return (
            <h3>No Reviews Yet</h3>
        )
    } else {
        return (
            <StarRatings starDimension={size} starRatedColor="gold" starSpacing="1px" rating={total/reviews.length} />
        )
    }
  }

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
                <div className="post_option mt-5">
                  <h4>Overall Rating</h4>
                  {
                    findAverageRating(business.reviews, '30px')
                  }
                </div>
                <h4 className="mt-5" style={{textDecoration: 'underline'}}>Reviews</h4>
                <div style={{height: '200px', overflowY: 'scroll'}}>
                  {
                    business.reviews.map(review => (
                      <div key={review.id} className="border p-2">
                          <h5>{review.title}</h5>
                          <p><Avatar src={`./api/uploads/${review.userImage}`} /> By: {review.user}</p>
                          <StarRatings rating={review.rating} starDimension="10px" starSpacing="1px" starRatedColor="orangered" />
                          <p>{review.message}</p>
                      </div>
                    ))
                  }
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
