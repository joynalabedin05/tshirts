import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContex } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContex)
    return (
        <div>
            <h3>uncle</h3>
            <p>grandpa money: {money}</p>
            <button onClick={() =>setMoney(money + 1000)}>send 1000tk</button>
            <section className='flex'>
                <Cousin>nabil </Cousin>
                <Cousin>nabila </Cousin>
            </section>
        </div>
    );
};

export default Uncle;