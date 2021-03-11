import React, { useState, useEffect } from 'react';
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import BusinessOwner from '../images/Petersons_Donughts_Img.png';
import { Card, CardColumns, Modal } from "react-bootstrap";
import { FaStar } from 'react-icons/fa';
import { StarRating } from '../components/StarRating';
import API from '../utils/API/userAPI';


const Landing = () => {
    const [businesses, setBusinesses] = useState([]);
    const [search, setSearch] = useState('');

    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);
        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedValue(value)
            }, delay)

            return () => {
                clearTimeout(handler)
            };
        }, [value, delay])

        return debouncedValue
    }

    const debouncedSearchTerm = useDebounce(search, 500)

    useEffect(() => {
        if (!search) {
            API.findAllBusinesses()
                .then(res => setBusinesses(res.data))
                .catch(err => console.log(err))
        } else if (debouncedSearchTerm) {
            searchBusinesses(debouncedSearchTerm)
        }
    }, [debouncedSearchTerm]);

    function searchBusinesses(search) {
        API.findBusinesses(search)
            .then(res => setBusinesses(res.data))
            .catch(err => console.log(err))
    }

    function handleInputChange(e) {
        setSearch(e.target.value)
    }

    return (
        <div className="container">
            <div className="header_input mt-5">
                <SearchIcon />
                <input onChange={handleInputChange} placeholder="Search Small Business" type="text" />
            </div>
            <div className="d-flex justify-content-center h-100">
                <CardColumns>
                    {
                        businesses.map(business => (
                            <Card key={business.uuid} className="card" style={{ height: 'auto', width: 'auto' }}>
                                <Card.Img variant="top" src={BusinessOwner} />
                                <Card.Body>
                                    <Card.Title>{business.companyName}</Card.Title>
                                    <Card.Text>
                                        {business.service}
                                    </Card.Text>
                                    <Card.Text>
                                        {business.streetAddress}
                                        <br />
                                        {business.city}, {business.state} {business.zipCode}
                                        <br />
                                        {business.phone}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body>
                                    <Card.Link href="#">{business.website}</Card.Link><br /><br />
                                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                                </Card.Body>
                            </Card>
                        ))
                    }
                </CardColumns>
            </div>
            {/* <div className="container">
            </div> */}
            <Modal show={false} style={{ opacity: 1 }}>
                <img src={BusinessOwner} />
                <h1>This should be modal</h1>
            </Modal>
        </div>
    );
}

export default Landing;