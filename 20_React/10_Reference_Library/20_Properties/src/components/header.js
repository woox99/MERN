import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>
                My name is {props.firstName} {props.lastName}.
            </h1>
        </div>
    );
}

export default Header;