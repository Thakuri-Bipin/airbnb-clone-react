import React from 'react';
import './css/Card.css';

const Card = ({ src, title, description, price }) => {
    return (
        <div className="card">
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h4>{price}</h4>
            </div>
        </div>
    )
}

export default Card;
