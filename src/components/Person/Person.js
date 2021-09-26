import React from 'react';
import './Person.css'

// dataload from map
const Person = (props) => {
    const { portrait, president, party, election, vicepresident, salary } = props.president || {};
    return (
        // single card
        <div className="president-card">
            <img className="president-card-img" src={portrait} alt="" />
            <h4>{president}</h4>
            <p>{props.president.presidency}</p>
            <p>{party}</p>
            <p>Election: {election}</p>
            <h5>Vice-President: {vicepresident}</h5>
            <p>Salary: ${salary}</p>
            {/* add to cart button */}
            <button
                onClick={() => props.handleAddToCart(props.president)}
                className="card-btn"><i className="fas fa-shopping-cart"></i> Add To Cart</button>
            <br />
            {/* icon */}
            <div className="icon">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-instagram-square"></i>
                <i className="fab fa-twitter-square"></i>
            </div>
        </div>
    );
};

export default Person;