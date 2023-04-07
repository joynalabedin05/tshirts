import React from 'react';
import './TShirt.css'

const TShirts = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: ${price}</p>
            <button onClick={() =>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirts;