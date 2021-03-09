import React from 'react';
import "./style.css";
import BusinessOwner from '../images/Petersons_Donughts_Img.png';
import { Card, CardColumns } from "react-bootstrap";
import { FaStar } from 'react-icons/fa';
import { StarRating } from '../components/StarRating';


const Landing = () => {
    return (
        <div classNameName="container">
            <div className="d-flex justify-content-center h-100">
            <CardColumns>
                <Card className="card" style={{ height: 'auto', width: 'auto' }}>
                    <Card.Img variant="top" src={BusinessOwner} />
                    <Card.Body>
                        <Card.Title>Business Name</Card.Title>
                        <Card.Text>
                        A brief description of goods/ services offered.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Business Website Link</Card.Link><br /><br />
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </Card.Body>
                    </Card>
                    <Card className="card" style={{ height: 'auto', width: 'auto' }}>
                    <Card.Img variant="top" src={BusinessOwner} />
                    <Card.Body>
                        <Card.Title>Business Name</Card.Title>
                        <Card.Text>
                        A brief description of goods/ services offered.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Business Website Link</Card.Link><br /><br />
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </Card.Body>
                    </Card>
                    <Card className="card" style={{ height: 'auto', width: 'auto' }}>
                    <Card.Img variant="top" src={BusinessOwner} />
                    <Card.Body>
                        <Card.Title>Business Name</Card.Title>
                        <Card.Text>
                        A brief description of goods/ services offered.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Business Website Link</Card.Link><br /><br />
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </Card.Body>
                    </Card>
                    <Card className="card" style={{ height: 'auto', width: 'auto' }}>
                    <Card.Img variant="top" src={BusinessOwner} />
                    <Card.Body>
                        <Card.Title>Business Name</Card.Title>
                        <Card.Text>
                        A brief description of goods/ services offered.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Business Website Link</Card.Link><br /><br />
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </Card.Body>
                    </Card>
                    <Card className="card" style={{ height: 'auto', width: 'auto' }}>
                    <Card.Img variant="top" src={BusinessOwner} />
                    <Card.Body>
                        <Card.Title>Business Name</Card.Title>
                        <Card.Text>
                        A brief description of goods/ services offered.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Business Website Link</Card.Link><br /><br />
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </Card.Body>
                    </Card>
                    <Card className="card" style={{ height: 'auto', width: 'auto' }}>
                    <Card.Img variant="top" src={BusinessOwner} />
                    <Card.Body>
                        <Card.Title>Business Name</Card.Title>
                        <Card.Text>
                        A brief description of goods/ services offered.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Business Website Link</Card.Link><br /><br />
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </Card.Body>
                    </Card>
                    <Card className="card" style={{ height: 'auto', width: 'auto' }}>
                    <Card.Img variant="top" src={BusinessOwner} />
                    <Card.Body>
                        <Card.Title>Business Name</Card.Title>
                        <Card.Text>
                        A brief description of goods/ services offered.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Business Website Link</Card.Link><br /><br />
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </Card.Body>
                    </Card>
                    <Card className="card" style={{ height: 'auto', width: 'auto' }}>
                    <Card.Img variant="top" src={BusinessOwner} />
                    <Card.Body>
                        <Card.Title>Business Name</Card.Title>
                        <Card.Text>
                        A brief description of goods/ services offered.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Business Website Link</Card.Link><br /><br />
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </Card.Body>
                    </Card>
                    <Card className="card" style={{ height: 'auto', width: 'auto' }}>
                    <Card.Img variant="top" src={BusinessOwner} />
                    <Card.Body>
                        <Card.Title>Business Name</Card.Title>
                        <Card.Text>
                        A brief description of goods/ services offered.
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="#">Business Website Link</Card.Link><br /><br />
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </Card.Body>
                    </Card>
                </CardColumns>     
            </div>
            <div className="container">
            </div> 
        </div>
    );
}

export default Landing;