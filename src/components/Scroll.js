import React from 'react';

// Props.children é uma maneira de acessar um componente dentro
// De outro componente. (Cardlist dentro de Scroll)

const Scroll = (props) => {
    return(
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '900px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;