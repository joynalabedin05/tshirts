import React from 'react';
import TShirts from '../TShirts/TShirts';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {

    let message;
    if(cart.length === 0){
        message = <p>please add some products</p>
    }
    else{
        message = <div>
                    <h3>boroloks</h3>
                    <p>thanks for giving money</p>
                </div>
    }
    
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow' : 'orange'}`}>something bold</p>
            {
                cart.length> 2? <span className='purple'>arokino</span> : <span>fokira</span>
            }
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}
                >{tshirt.name}
                 <button onClick={() =>handleRemoveFromCart(tshirt._id )}
                >X</button></p>)
            }
            {
                cart.length===2 && <span> double bonanza!!</span>
            }
            {
                cart.length ===3 || <h5> tinta to hoilo na</h5>
            }
        </div>
    );
};

export default Cart;

// conditional renderring

// 1.use if  else to set a variable
// 2. use ternary operator
// 3. use logical and
// 4. use logical or

// conditional css 
