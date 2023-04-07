import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const agnty = useContext(RingContex)
    return (
        <div>
            <h3>special</h3>
            <p><small>ring: {agnty}</small></p>
        </div>
    );
};

export default Special;