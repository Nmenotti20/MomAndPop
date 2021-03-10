import React from 'react';
import "./style.css";
import BusinessOwner from '../images/Petersons_Donughts_Img.png';
import { Card } from "react-bootstrap";
import Feed from '../components/Feed';


function BizProfile() {
    return (


        <div classNameName="container">
            <div className="d-flex justify-content-center h-100">
                <Card className="card" style={{ height: 'auto', width: 'auto' }}>
                    <Card.Img variant="top" src={BusinessOwner} />
                    <Card.Body>
                        <Card.Title>Business Name</Card.Title>
                        <Card.Text>
                            A brief description of goods/ services offered.
                                </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <div className="form-group">
                            <Card.Link href="#">Business Website Link</Card.Link>
                            <Card.Link href="#">Ratings Here with Link</Card.Link>
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

export default BizProfile;