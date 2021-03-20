import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";

import { Card, Modal } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

import StarRatings from 'react-star-ratings'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import API from '../utils/API/businessAPI';

function BizProfile() {
  const [business, setBusiness] = useState({
    reviews: []
  })
  const [showModal, setShowModal] = useState(false);
  const [bizInfo, setBizInfo] = useState({});
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [bizComment, setBizComment] = useState({});

    

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

  function editBizProfileClick(e){
    setShowModal(true);
    setBizInfo(business);
    console.log("****USER",bizInfo)
  }
  
  function handleProfileChange(e){
    const {name, value} = e.target;
    setBizInfo({...bizInfo,[name]:value})
  
  }

  function handleCommentChange(e){
    const {name, value} = e.target;
    setBizComment({
      ...bizComment,
      [name]:value
    })
  }

  
  function handleProfileSubmit(e){
    e.preventDefault();
    console.log("i was clicked")
    console.log(bizInfo);
    if(bizInfo.email  && bizInfo.firstName && bizInfo.lastName && bizInfo.companyName && bizInfo.service && bizInfo.streetAddress && bizInfo.city && bizInfo.state && bizInfo.zipCode && bizInfo.phone){
      API.updateInfo({
        ...bizInfo
      })
      .then((res)=>{setShowModal(false)
      console.log(res)})
  
      .catch(function(err){
      console.log(err)
    })
    }
  }

  function handleCommentSubmit(e){
    e.preventDefault();
    console.log("You replied to a Comment")
    console.log(bizComment);
    // setShowCommentModal(false);
    API.reply(bizComment)
      .then(()=>  {
        setShowCommentModal(false)
      })
      .catch(err=>
        console.log(err)
        )
  }

  function handleReplyClick(e)  {
    e.preventDefault();
    console.log(e.target.id)
    setBizComment({
      ...bizComment,
      reviewId:e.target.id
      
    })
    setShowCommentModal(true)
  }




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
      <Modal 
      show={showCommentModal} 
      onHide={() => setShowCommentModal(false)} 
      style={{ opacity: 1 }}>
          <form onSubmit={handleCommentSubmit}>
          <h1>REPLY TO COMMENT</h1>
            <input name="message" value={bizComment.message} onChange={handleCommentChange}/>
            <input
                  className="btn float-right edit_btn"
                  type="submit"
                  value="Submit"
                />
          </form>
      </Modal>


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
                      <div key={review.id} className="comment-height border p-2">
                          <h5>{review.title}</h5>
                          <p><Avatar src={`./api/uploads/${review.userImage}`} /> By: {review.user}</p>
                          <StarRatings rating={review.rating} starDimension="10px" starSpacing="1px" starRatedColor="orangered" />
                          <p>{review.message}</p>
                            
                            {/* id={review.id} 
                            // onClick={reviewOnClick} 
                            style={{cursor: 'pointer'}}> */}
                              <ChatBubbleOutlineIcon 
                              // className="post_option float-right" 
                              id={review.id} />
                              <p 
                              // className="post_option float-right" 
                              onClick={handleReplyClick} 
                              id={review.id}>Reply to Comment</p>
                      </div>
                    ))
                  }
                </div>
              </div>
              <input
                className="btn float-right edit_btn"
                type="submit"
                value="Edit Profile"
                onClick={editBizProfileClick}
              />
            </div>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </Card.Body>
        </Card>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} style={{ opacity: 1 }}>
                
                    <form onSubmit={handleProfileSubmit}>
                      <h1>EDIT PROFILE</h1>
                    <label>FIRST NAME</label>
                    <input name="firstName" value={bizInfo.firstName} onChange={handleProfileChange}/>
                    <label>LAST NAME</label>
                    <input name="lastName" value={bizInfo.lastName} onChange={handleProfileChange}/>
                    <label>EMAIL</label>
                    <input name="email" value={bizInfo.email} onChange={handleProfileChange}/>
                    <label>Company Name</label>
                    <input name="companyName" value={bizInfo.companyName} onChange={handleProfileChange}/>
                    <label>Servoce</label>
                    <input name="service" value={bizInfo.service} onChange={handleProfileChange}/>
                    <label>Street Address</label>
                    <input name="streetAddress" value={bizInfo.streetAddress} onChange={handleProfileChange}/>
                    <label>City</label>
                    <input name="city" value={bizInfo.city} onChange={handleProfileChange}/>
                    <label>State</label>
                    <input name="state" value={bizInfo.state} onChange={handleProfileChange}/>
                    <label>Zipcode</label>
                    <input name="zipCode" value={bizInfo.zipCode} onChange={handleProfileChange}/>
                    <label>Phone</label>
                    <input name="phone" value={bizInfo.phone} onChange={handleProfileChange}/>
                    <label>Website</label>
                    <input name="website" value={bizInfo.website} onChange={handleProfileChange}/>
                     <input type="submit" value="Confirm" className="btn float-right edit_btn"/>
                    </form>             
               
            </Modal>
      <div className="container"></div>
    </div>
  );
}

export default withRouter(BizProfile);
