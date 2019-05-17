import React from 'react';
import styles from './Person.module.css';
import Validation from '../../Validation/Validation';

const Person = (props) => {
    return (
        <div>
            <div className={styles.person}>
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