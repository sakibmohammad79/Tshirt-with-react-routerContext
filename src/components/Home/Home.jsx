import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import './Home.css'
import Cart from '../Cart/Cart';
const Home = () => {
    const products = useLoaderData();
    console.log(products);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) =>{
        const exists = cart.find(ts => ts._id === product._id)
        if(exists){
            alert('this product already bookmarked!')
        }
        else{
            const newCart = [...cart, product]
            setCart(newCart)
        }
       
    }

    const handleRemoveToCart = (id) =>{
        const remaining = cart.filter((ts) => ts._id !== id)
        setCart(remaining);
    }
    

    return (
        <div className='home-container gap-4 m-8'>
            <div className='product-container'>
            {
                products.map((product) => <Product
                key={product._id}
                product = {product}
                handleAddToCart={handleAddToCart}></Product>)
            }
            </div>
            <div className='cart-container'>
              {
                <Cart cart={cart}
                handleRemoveToCart={handleRemoveToCart}
                ></Cart>
              }
            </div>
        </div>
    );
};

export default Home;