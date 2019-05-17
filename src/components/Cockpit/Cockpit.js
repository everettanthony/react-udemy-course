import React from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {
    let emptyWarning = '';
    let btnClass = '';

    if (props.showPersons) {
        btnClass = styles.show;
    }

    if (props.persons.length <= 2) {
      emptyWarning = <p className={styles.warning}>Running low on people</p>;
    }

    return (    
        <div className={styles.cockpit}>
            <h1>React App</h1>
            {emptyWarning}
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle List View
            </button>
        </div>    
    );
};

export default Cockpit;