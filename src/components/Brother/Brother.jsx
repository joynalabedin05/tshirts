import React, { useContext } from 'react';
import { RingContex } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContex)
    return (
        <div>
            <h3>brother</h3>
            <p>{ring}</p>
        </div>
    );
};

export default Brother;