import React, { PureComponent } from 'react';
import Person from '../../components/People/Person/Person';
import Char from '../../components/Char/Char';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

class People extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[People.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //    console.log('[People.js] shouldComponentUpdate');
    //    return nextProps.persons !== this.props.persons ? true : false;
    // } 

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[People.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot' };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[People.js] componentDidUpdate', snapshot);
    }

    componentWillUnmount() {
        console.log('[People.js] Unmounted');
    }

    render() {
        console.log('[People.js] rendering...');

        return this.props.persons.map((person, index) => {
            const charList = person.name.split('').map((ch, i) => {
                return <Char character={ch} key={i} clicked={() => this.props.deleteChar(i, person.id)}/>;
            });
    
            return (
                <ErrorBoundary key={person.id}>
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name} 
                    age={person.age}
                    nameList={charList}
                    changed={(event) => this.props.changed(event, person.id)}  
                />
                </ErrorBoundary>
            );
        });
    }


};

export default People;