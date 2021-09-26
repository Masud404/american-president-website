import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './President.css'

const President = () => {
    // usestate in president
    const [president, setPresident] = useState([]);
    // usestate in cart
    const [cart, setCart] = useState([]);
    // dataload in useeffect
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setPresident(data))
    }, [])
    // handleaddtocart 
    const handleAddToCart = president => {
        const newCart = [...cart, president];
        setCart(newCart);
    }

    return (
        <div className="president-container">
            {/* card-container */}
            <div className="person-container">
                {
                    president.map((president, key) => <Person
                        key={key}
                        president={president}
                        handleAddToCart={handleAddToCart}
                    >

                    </Person>)
                }
            </div>
            {/* cart-container */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default President;