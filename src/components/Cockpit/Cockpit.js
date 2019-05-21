import React, { useEffect, useRef, useContext } from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    let emptyWarning = '';
    let btnClass = '';
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    console.log('AUTH:', authContext.authenticated);


    // CANNOT access ref yet because DOM elements aren't rendered yet.
    // toggleBtnRef.current.click();

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // fake http request 
    //    const timer = setTimeout(() => {
            console.log('Saving the data.');
            // click toggle list view button after 2 seconds
    //        toggleBtnRef.current.click();
    //    }, 2000);

        return () => {
        //    clearTimeout(timer);
            console.log('[Cockpit.js] cleanup/unmounting work in useEffect');
        };
    }, []); // only run when props.persons changes.
    // pass empty array to only run useEffect on initial app load

    if (props.showPersons) {
        btnClass = styles.show;
    }

    if (props.personsLength <= 2) {
      emptyWarning = <p className={styles.warning}>Running low on people</p>;
    }

    return (    
        <div className={styles.cockpit}>
            <h1>{props.title}</h1>
            {emptyWarning}
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>
                Toggle List View
            </button>
            <button onClick={authContext.login}>{authContext.authenticated ? 'Log Out' : 'Log In'}</button>
        </div>    
    );
};

export default React.memo(Cockpit);