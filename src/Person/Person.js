import React from 'react';
import './Person.css';
import Validation from '../Validation/Validation';

const Person = (props) => {
    const hiddenPerson = {
        display: 'none'
    };

    return (
        <div>
            <div className="person" style={props.name ? null : hiddenPerson}>
                <p onClick={props.click}>I'm {props.name} and I am {props.age > 1 ? `${props.age} years` : `a ${props.age} year`} old.</p>
                {props.children ? <p>{props.children}</p> : ''}
                <input type="text" onChange={props.changed} value={props.name} />
                <Validation inputLength={props.name.length} />
            </div>
            {props.nameList}
        </div>
    );
};

export default Person;