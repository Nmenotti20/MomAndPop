import React from 'react';
import "./style.css";
import Shopper from '../images/Shopper_img.png';
import { Card } from "react-bootstrap";


function Profile() {
    return (

        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <Card className="card" style={{ height: 'auto', width: 'auto' }}>
                    <Card.Img variant="top" src={Shopper} />
                        <Card.Body>
                            <Card.Title>Shopper Name</Card.Title>
                                <Card.Text>
                                A brief description of Shopper Profile.
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
            <div className="container">
            </div> 
        </div>
    );
}

export default Profile;