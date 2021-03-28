import React, { useState, useEffect, useContext } from "react";
import "./style.css";

import { Card, Modal } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import API from '../utils/API/userAPI';
import UserContext from  '../utils/Context/UserContext';
import StarRatings from 'react-star-ratings'

function Profile() {
    const [user, setUser] = useState({
      Reviews: []
    });
    const [showModal, setShowModal] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [showReviews, setShowReviews] = useState(false);
    const { changeUser } = useContext(UserContext); 
    
    
    useEffect(() => {
        API.findOneUser()
          .then(res => {
            console.log(res.data)
            setUser({
              ...user,
              ...res.data
            })
          })
          .catch(err => console.log(err))
      }, [])

function editProfileClick(e){
  setShowModal(true);
  setUserInfo(user);
  console.log("****USER",userInfo)
}

function handleProfileChange(e){
  const {name, value} = e.target;
  setUserInfo({...userInfo,[name]:value})

}

function handleProfileSubmit(e){
  e.preventDefault();
  console.log("i was clicked")
  console.log(userInfo);
  if(userInfo.firstName && userInfo.lastName && userInfo.email && userInfo.username){
    API.updateInfo({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      username: userInfo.username
    })
    .then((res)=>{
      setShowModal(false)
      console.log(res)
      localStorage.setItem("name", `${userInfo.firstName} ${userInfo.lastName}`);
      changeUser(document.cookie.split(';')[0].split('=')[1], localStorage.getItem("loggedInAs"), localStorage.getItem("name"), localStorage.getItem("image"));
      setUser({
        ...user,
        ...userInfo
      })
    })

    .catch(function(err){
    console.log(err)
  })
  }
}

  function reviews(reviews) {
    return (
      
      reviews.map(review => (
        // <div key={review.id} className="bg-white border">
        //   <h5>{review.businessName}</h5>
        //   <StarRatings rating={review.rating} starDimension="10px" starSpacing="1px" starRatedColor="orangered" />
        //   <h6 className="mt-2">{review.title}</h6>
        //   <p style={{fontSize: '10px'}}>{review.message}</p>
          <div key={review.id} className="border p-2">
              <div style={{fontSize: '15px'}}><strong>{review.businessName}</strong></div>
              <StarRatings rating={review.rating} starDimension="10px" starSpacing="1px" starRatedColor="orangered" />
              <div style={{fontSize: '12.5px'}}><strong>{review.title}</strong></div>
              <div style={{fontSize: '12.5px'}}>{review.message}</div>
              <div style={{color: 'gray'}}>at {formatDateTime(review.createdAt)}</div>
              
              <div>
                  <div style={{textDecoration: 'underline'}}><strong>{review.Replies.length ? `${review.businessName} replied:` : `${review.businessName} has Not Replied Yet`}</strong></div>
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
          </div>
        // </div>
      ))
      
    )
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
            <div className="d-flex justify-content-center h-100">
                <Card className="card" style={{width: '600px'}}>
                    <Card.Img variant="top" src={user.image} />
                        <Card.Body>
                            <Card.Title>
                              <h1>{user.username}</h1>  
                            </Card.Title>
                                <Card.Text>
                                <h5>{user.firstName}</h5>
                                <h5>{user.lastName}</h5>
                                <h5>{user.email}</h5>
                                </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <div className="form-group">
                                <Card.Link style={{cursor: 'pointer'}} onClick={e => e.target.textContent === "My Reviews" ? setShowReviews(true) : setShowReviews(false)}>{showReviews ? "Hide Reviews" : "My Reviews"}</Card.Link>
                                <input  className="btn float-right edit_btn" onClick={editProfileClick} value="Edit Profile"/>
                                </div>
                                <div>
                                  {showReviews ? reviews(user.Reviews) : <div></div>}
                                </div>
                        </Card.Body>
                </Card>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)} style={{ opacity: 1 }}>
                
                    <form onSubmit={handleProfileSubmit}>
                      <h1>EDIT PROFILE</h1>
                    <label>FIRST NAME</label>
                    <input name="firstName" value={userInfo.firstName} onChange={handleProfileChange}/>
                    <label>LAST NAME</label>
                    <input name="lastName" value={userInfo.lastName} onChange={handleProfileChange}/>
                    <label>EMAIL</label>
                    <input name="email" value={userInfo.email} onChange={handleProfileChange}/>
                    <label>USER</label>
                    <input name="username" value={userInfo.username} onChange={handleProfileChange}/>
                    <input type="submit" value="Confirm" className="btn float-right edit_btn"/>
                    </form> 


              

                
            </Modal>
            <div className="container"></div> 
        </div>
    );
}

export default withRouter(Profile);