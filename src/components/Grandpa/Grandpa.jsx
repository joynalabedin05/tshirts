import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';
import './Grandpa.css';

export const RingContex  = createContext('gold');
export const MoneyContex = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0);
    
    return (
        <div className='grandpa'>
            <h3>grandpa </h3>
            <p>has money: {money}</p>
            <MoneyContex.Provider value={[money, setMoney]}>
                <RingContex.Provider value='Golden ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Unty ring={ring}></Unty>
                    </section>
                </RingContex.Provider>
            </MoneyContex.Provider>
        </div>
       
    );
};

export default Grandpa;