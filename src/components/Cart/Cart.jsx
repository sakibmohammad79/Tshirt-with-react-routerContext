import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveToCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some product</p>
    }
    else{
        message=<p>Thanks for buying T-shirt</p>
    }
    return (
        <div>
            
            <h3 className={`font-bld ${cart.length ===1? 'red' : 'blue'}`}>Order Summary: {cart.length}</h3>
            {message}
            {cart.length >2 ? 'Aro kinte paro' : 'fokir'}
            {
                cart.map((tshirt) => <p className='font-bold'
                key={tshirt._id}
                >{tshirt.name} <button onClick={() => handleRemoveToCart(tshirt._id)}>X</button></p>)
            }
            {cart.length == 3 && 'you buy a 3 t-shirt'}
            {cart.length == 3 || '3 ta tho hoilo na'}
        </div>
    );
};

export default Cart;