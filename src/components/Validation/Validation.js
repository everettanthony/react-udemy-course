import React from 'react';

const Validation = (props) => {
    const validationStyles = {
        color: 'red'
    };

    let validationMessage = '';

    if (props.inputLength < 5) {
        validationMessage = <p>Text too short.</p>;
    }

    return (
        <div style={validationStyles}>
            {validationMessage}
        </div>
    );
};

export default Validation;