import React from 'react';

const Char = (props) => {
    const style = {
        background: '#f1f5fb',
        border: '1px solid #000',
        color: '#3b68b5',
        display: 'inline-block',
        fontWeight: 'bold',
        margin: '0 2px 20px',
        padding: ' 10px 20px',
        textAlign: 'center',
        textTransform: 'uppercase'
    };

    const spacer = {
        background: 'none',
        display: 'inline-block',
        margin: '0 2px',
        padding: ' 10px'
    }

    return (
        <div style={props.character !== ' ' ? style : spacer} onClick={props.clicked}>
            {props.character}
        </div>
    );
};


export default Char;