import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirts from '../TShirts/TShirts';
import Cart from '../Cart/Cart';
import './Home.css'
import { useState } from 'react';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (tshirt) =>{
        const exists = cart.find(ts => ts._id===tshirt._id);
        if(exists){
            toast('you have already added this tshirt!!')
        }
        else{
            const newCart = [...cart , tshirt];
            setCart(newCart);
        }
        
    }

    const handleRemoveFromCart = id =>{
        console.log(id);
        const remaining = cart.filter(ts =>ts._id !==id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
           <div className='tshirt-container'>
            {
                tshirts.map(tshirt => <TShirts 
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
                ></TShirts>)
            }
           </div>
           <div className='cart-container'>
                <Cart cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
           </div>
        </div>
    );
};

export default Home;