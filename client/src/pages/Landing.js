import React, { useState, useEffect, useContext, useRef } from 'react';
import UserContext from '../utils/Context/UserContext';
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import BusinessOwner from '../images/Petersons_Donughts_Img.png';
import { Card, CardColumns, Modal } from "react-bootstrap";
import { FaStar } from 'react-icons/fa';
import StarRating from '../components/StarRating';
import API from '../utils/API/userAPI';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";


const Landing = () => {
    const [businesses, setBusinesses] = useState([]);
    const [search, setSearch] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [reviewBusiness, setReviewBusiness] = useState({});
    const { token, loggedInAs, name, image} = useContext(UserContext);
    const [modalContent, setModalContent] = useState(() => {
        return (
            'please sign in'
        )
    })
    const reviewTitleRef = useRef();
    const reviewRef = useRef();
    const ratingRef = useRef();


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

    function submitReview(e) {
        e.preventDefault();
        API.makeReview({
            businessId: reviewBusiness.uuid,
            title: reviewTitleRef.current.value,
            message: reviewTitleRef.current.value,
            rating: ratingRef.current.value
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        if (reviewBusiness !== {}) {
            setModalContent(() => {
                return (
                    <div>
                        <Card.Img src={`/api/uploads/${reviewBusiness.image}`} />
                        <h1>{reviewBusiness.companyName}</h1>
                        <h4>{reviewBusiness.service}</h4>
                        <form onSubmit={submitReview}>
                            <StarRating />
                            <label>Select Rating</label>
                            <select className="form-select" ref={ratingRef}>
                                <option defaultValue>Select a Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <br/>
                            <label>Title your review</label>
                            <input className="form-control" ref={reviewTitleRef} />
                            <label>Leave you review here</label>
                            <textarea className="form-control" rows="3" ref={reviewRef}></textarea>
                            <button className="btn btn-primary" type='submit'>Submit Review</button>
                        </form>
                    </div>
                )
            })
        }
    }, [reviewBusiness])

    function reviewOnClick(e) {
        setShowModal(true);
        if (token && name && loggedInAs === 'user' && image) {
            setReviewBusiness(businesses[e.target.id])
            console.log(businesses[e.target.id])
        } else {
            console.log('please log in as shopper to leave a review')
        }
    }

    return (
        <div>
            <div className="header_input mt-5">
                <SearchIcon />
                <input onChange={handleInputChange} placeholder="Search Small Business" type="text" />
            </div>
            <div>
                <CardColumns>
                    {
                        businesses.map((business, index) => (
                            <Card key={business.uuid}>
                                <Card.Img variant="top" src={`/api/uploads/${business.image}`} />
                                <Card.Body>
                                    <Card.Title className="rem2">{business.companyName}</Card.Title>
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
                                    <Card.Link href={business.website}>{business.website}</Card.Link>
                                    <StarRating />
                                    <div className="post_option" id={index} onClick={reviewOnClick} style={{cursor: 'pointer'}}>
                                        <ChatBubbleOutlineIcon id={index} />
                                        <p id={index}>Post a Review</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </CardColumns>
            </div>
            <Modal show={showModal} onHide={() => setShowModal(false)} style={{ opacity: 1 }}>
                {
                    modalContent
                }
            </Modal>
            <div className="container"></div>
        </div>
    );
}

export default Landing;