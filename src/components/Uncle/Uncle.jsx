import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import Cousin2 from '../Cousin2/Cousin2';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Uncle</h2>
            <button onClick={() => setMoney(money+1000)}>Send Money</button>
            <section className='flex'>
                <Cousin></Cousin>
                <Cousin2></Cousin2>
            </section>
        </div>
    );
};

export default Uncle;