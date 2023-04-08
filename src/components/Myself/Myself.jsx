import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';


const Myself = () => {
    const agti = useContext(RingContext)
    return (
        <div>
            <h2>Myself</h2>
            <p>{agti}</p>
        </div>
    );
};

export default Myself;