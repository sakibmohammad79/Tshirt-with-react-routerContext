import React from 'react';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
    const {picture, price, name,} = product;
    return (
        <div className='product-info text-center'>
            <img className='rounded' src={picture} alt="" />
            <p className='mt-3 font-bold'>Name: {name}</p>
            <p className='my-3 font-bold'>Price: {price}</p>
            <button onClick={()=>handleAddToCart(product)} className='bg-orange-500 font-bold text-white rounded-xl py-2 px-4'>Buy Now</button>
        </div>
    );
};

export default Product;