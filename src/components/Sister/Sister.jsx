import React, { useContext } from 'react';
import { MoneyContex } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContex);
    return (
        <div>
            <h3>sister</h3>
            <p>grandpa money: {money}</p>
        </div>
    );
};

export default Sister;