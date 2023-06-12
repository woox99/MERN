import React, { useState } from 'react';

const DisplayTabs = (props) => {
    // const [msg, setMsg] = useState('');
    const tabs = props.tabs;

    const sendMsg = (msg) => {
        props.retrieveMsg(msg);
    };

    return (
        <div className="tabs">
            {
                tabs.map((tab, index) =>
                    <button
                        onClick={() => sendMsg(tab)}
                        className='tab'
                        key={index}>
                        {index + 1}
                    </button>
                )
            }
        </div>
    );
};

export default DisplayTabs;
