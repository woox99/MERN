import React, { useState } from 'react';

const DisplayBoxes = (props) => {
    const boxes = props.sentBoxes;

    const displayBodyStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        alignItems: 'end'
    };

    return (
        <div className="display-body" style={displayBodyStyle}>
            {
                boxes.map((box, index) =>
                    <div
                        className="box"
                        key={index}
                        style={{
                            backgroundColor: box.color,
                            width: box.width,
                            height: box.height,
                            margin: '25px'
                        }}>
                    </div>
                )
            }
        </div>

    );
};

export default DisplayBoxes;
