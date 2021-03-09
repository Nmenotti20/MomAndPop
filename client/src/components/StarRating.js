import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "./StarRating.css";

function StarRating() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            type="radio"
                            className="radiobtn"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}

                        />
                        <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={30}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseOut={() => setHover(null)}
                        />
                    </label>
                )
            })}
        </div>
    )
}

export default StarRating