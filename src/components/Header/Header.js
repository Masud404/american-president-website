import React from 'react';
import './Header.css'


const Header = () => {
    return (
        // header-section
        <div className="header">
            <h1>Presidents of the United States (U.S)</h1>
            <p>The president of the United States is the head of state and head of government of the United States, indirectly elected to a four-year term by the American ...</p>
            <h2>One government four years  Total Budget: <span className="total-budget-span-color">$500 Million Doller</span></h2>
        </div>
    );
};

export default Header;