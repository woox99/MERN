import React from 'react';

const Main = props => {
    return (
        <div className="main">
            {/* props.children property allow to to use Advertisement and SubConents divs inside */}
            {props.children}
        </div>
    );
}

export default Main;