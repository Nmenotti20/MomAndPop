import React, { useState, useEffect } from "react";
import "./style.css";
import Shopper from '../images/Shopper_img.png';
import { Card } from "react-bootstrap";
import { withRouter } from 'react-router-dom';
import API from '../utils/API/userAPI';

function Profile() {
    const [user, setUser] = useState({})

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

    return (

        <div>
            <div className="d-flex justify-content-center h-100">
                <Card className="card">
                    <Card.Img variant="top" src={`/api/uploads/${user.image}`} />
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
                                <input type="submit" value="Edit Profile" className="btn float-right edit_btn" />
                                </div>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </Card.Body>
                </Card>
            </div>
            <div className="container"></div> 
        </div>
    );
}

export default withRouter(Profile);