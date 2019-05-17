import React from 'react';
import Person from '../../components/People/Person/Person';
import Char from '../../components/Char/Char';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const People = (props) => props.persons.map((person, index) => {
    const charList = person.name.split('').map((ch, i) => {
        return <Char character={ch} key={i} clicked={() => props.deleteChar(i, person.id)}/>;
    }); 

    return (
        <ErrorBoundary key={person.id}>
        <Person
            click={() => props.clicked(index)}
            name={person.name} 
            age={person.age}
            nameList={charList}
            changed={(event) => props.changed(event, person.id)}  
        />
        </ErrorBoundary>
    );
});

export default People;