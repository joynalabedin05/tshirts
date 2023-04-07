import React from 'react';
import Cousin from '../Cousin/Cousin';

const Unty = ({ring}) => {
    return (
        <div>
            <h2>unty: </h2>
            <section className='flex'>
                <Cousin>abir</Cousin>
                <Cousin ring={ring} hasFriend={true}>nibir</Cousin>
            </section>
        </div>
    );
};

export default Unty;