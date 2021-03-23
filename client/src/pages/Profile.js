import React, { useState, useEffect } from "react";
import "./style.css";

import { Card, Modal } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import API from '../utils/API/userAPI';

function Profile() {
    const [user, setUser] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    
    
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
    .then((res)=>{setShowModal(false)
    console.log(res)})

    .catch(function(err){
    console.log(err)
  })
  }
}

    return (

        <div>
            <div className="d-flex justify-content-center h-100">
                <Card className="card">
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
                                <Card.Link href="#">Favortes</Card.Link>
                                <input  className="btn float-right edit_btn" onClick={editProfileClick} value="Edit Profile"/>
                                </div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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