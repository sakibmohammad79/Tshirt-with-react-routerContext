import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between bg-black p-4 items-center'>
            <div>
                <h3 className='text-3xl font-bold text-pink-600'>Best T-shirt</h3>
            </div>
            <div className='font-bold text-white'>
                <Link className='hover:text-pink-600 mr-6' to="/home">Home</Link>
                <Link className='hover:text-pink-600' to="/review">Review</Link>
                <Link className='mx-6 hover:text-pink-600' to="/about">About</Link>
                <Link className='hover:text-pink-600' to="/contact">Contact</Link>
                <Link className='hover:text-pink-600 ml-6' to="/grandpa">Grandpa</Link>
            </div>
        </div>
    );
};

export default Header;