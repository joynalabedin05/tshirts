import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h5>friend</h5>
            {ring && <p> <small>ring: diamond</small> </p> }
        </div>
    );
};

export default Friend;