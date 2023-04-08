import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle'
import './Grandpa.css'

export  const RingContext = createContext('gold');
export const MoneyContext = createContext(0);
const Grandpa = () => {
    const [money, setMoney] = useState(0)
    return (
        <div className='text-center mt-20 font-bold grandpa'>
            <h2>Grandpa</h2>
                <p>grandpa has Money: {money}</p>
                <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden Ring'>
                <section className='flex justify-around'>
                    <Father></Father>
                    <Uncle></Uncle>
                </section>
                </RingContext.Provider>
                </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;