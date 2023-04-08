import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin2 = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>cousin2</h2>
            <p>{ring}</p>
        </div>
    );
};

export default Cousin2;