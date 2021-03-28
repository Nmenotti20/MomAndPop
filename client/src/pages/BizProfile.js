import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import "./style.css";

import { Card, Modal } from "react-bootstrap";
import { Avatar } from "@material-ui/core";

import StarRatings from 'react-star-ratings'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import API from '../utils/API/businessAPI';
import UserContext from '../utils/Context/UserContext';

function BizProfile() {
  const [business, setBusiness] = useState({
    Reviews: []
  })
  const [showModal, setShowModal] = useState(false);
  const [bizInfo, setBizInfo] = useState({});
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [bizComment, setBizComment] = useState({});
  const { changeUser } = useContext(UserContext);

    

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
      .then((res)=>{
        setShowModal(false)
        localStorage.setItem("name", `${bizInfo.companyName}`);
        changeUser(document.cookie.split(';')[0].split('=')[1], localStorage.getItem("loggedInAs"), localStorage.getItem("name"), localStorage.getItem("image"));
        setBusiness({
          ...business,
          ...bizInfo
        })
      })
  
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
        API.find()
          .then(res => {
            console.log(res.data)
            setBusiness({
              ...business,
              ...res.data
            })
          })
          .catch(err => console.log(err))
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

  function formatDateTime(dateTime) {
    let time;
    if (parseInt(dateTime.split('T')[1].split(':')[0]) > 12) {
      time = `${parseInt(dateTime.split('T')[1].split(':')[0]) - 12}:${dateTime.split('T')[1].split(':')[1]} PM`
    } else if (parseInt(dateTime.split('T')[1].split(':')[0]) < 12) {
      time = `${dateTime.split('T')[1].split(':')[0].split('')[1]}:${dateTime.split('T')[1].split(':')[1]} AM`;
    } else {
      time = `${dateTime.split('T')[1].split(':')[0]}:${dateTime.split('T')[1].split(':')[1]} PM`
    }
    // parseInt(dateTime.split('T')[1].split(':')[0]) > 12 ? time = 'blah' : time = `${dateTime.split('T')[1].split(':')[0].split('')[1]}:${dateTime.split('T')[1].split(':')[1]} AM`;
    const date = `${dateTime.split('T')[0].split('-')[1]}/${dateTime.split('T')[0].split('-')[2]}/${dateTime.split('T')[0].split('-')[0]}`
    return `${time} on ${date}`;
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
          <Card.Img variant="top" src={business.image} />
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
                    findAverageRating(business.Reviews, '30px')
                  }
                </div>
                <h4 className="mt-5" style={{textDecoration: 'underline'}}>Reviews</h4>
                <div className='border' style={{height: '200px', overflowY: 'scroll'}}>
                  {
                    business.Reviews.map(review => (
                      <div key={review.id} className="border p-2">
                          <div style={{fontSize: '15px'}}><strong>{review.title}</strong></div>
                          <div style={{fontSize: '10px', marginLeft: 0}}>by {review.user}</div>
                          <Avatar src={review.userImage} />
                          <div style={{textDecoration: 'underline'}}><strong>Review</strong></div>
                          <div style={{fontSize: '15px'}}>{review.message}</div>
                          <div style={{color: 'gray'}}>at {formatDateTime(review.createdAt)}</div>
                          <StarRatings rating={review.rating} starDimension="10px" starSpacing="1px" starRatedColor="orangered" />
                          <div>
                              <div style={{textDecoration: 'underline'}}><strong>{review.Replies.length ? `You replied:` : `You Haven't Replied Yet`}</strong></div>
                              <div>
                                  {
                                      review.Replies.map(reply => (
                                          <div key={reply.id}>
                                              <span style={{fontSize: '12.5px', marginLeft: 0}}>{reply.message}</span> <span style={{color: 'gray', marginLeft: 0}}>at {formatDateTime(reply.createdAt)}</span>
                                          </div>
                                      ))
                                  }
                              </div>
                          </div>
                            {/* id={review.id} 
                            // onClick={reviewOnClick} 
                            style={{cursor: 'pointer'}}> */}
                              <ChatBubbleOutlineIcon 
                              // className="post_option float-right" 
                              id={review.id} className='mt-3'/>
                              <p 
                              // className="post_option float-right" 
                              onClick={handleReplyClick} 
                              id={review.id} style={{cursor: 'pointer'}}>Reply to Comment</p>
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
