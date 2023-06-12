import React, { useState } from 'react';

const DisplayMsg = (props) => {
    // const boxes = props.sentBoxes;

    // const displayBodyStyle = {
    //     display: 'flex',
    //     justifyContent: 'space-around',
    //     flexWrap: 'wrap',
    //     alignItems: 'end'
    // };

    return (
        <div className="msg">
            <p>{props.msg}</p>
        </div>

    );
};

export default DisplayMsg;
