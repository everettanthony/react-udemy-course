import React, { Component } from 'react';
import styles from './App.module.css';
import People from '../components/People//People';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Tony', age: 43 },
      { id: 2, name: 'Heather', age: 43 },
      { id: 3, name: 'Lorelei', age: 8 },
      { id: 4, name: 'Layla', age: 6 }
    ],
    otherState: 'some other value',
    showPersons: true
  };

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const personsNew = [...this.state.persons];
    personsNew[personIndex] = person;

    this.setState( {persons: personsNew} );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  deletePersonHandler = (i) => {
    const persons = [...this.state.persons];
    persons.splice(i, 1);
    this.setState({persons: persons});
  }
  
  deleteCharHandler = (index, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    const text = person.name.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    person.name = updatedText;

    const personsNew = [...this.state.persons];
    personsNew[personIndex] = person;

    this.setState( {persons: personsNew} );
  }

  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <People
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} 
          deleteChar={this.deleteCharHandler} />    
      );
    }

    return (
      <div className={styles.app}>
        <Cockpit 
          showPersons={this.state.showPersons} 
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
