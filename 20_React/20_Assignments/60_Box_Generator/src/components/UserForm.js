import React, { useState } from 'react';

const UserForm = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBox = {
            color: color,
            width: width + 'px',
            height: height + 'px',
        };

        props.retreiveBox(newBox);
        // console.log(newBox);

        // resets the values after form is submitted
        setColor("");
        setWidth("");
        setHeight("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color:</label>
                <input type="text" name='color' value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            <div>
                <label>Width (px):</label>
                <input type="text" name='width' value={width} onChange={(e) => setWidth(e.target.value)} />
            </div>
            <div>
                <label>Height (px):</label>
                <input type="text" name='height' value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <input type="submit" value="Add Box" />
        </form>

    );
};

export default UserForm;
