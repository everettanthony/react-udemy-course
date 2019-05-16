import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Char from './Char/Char';
import Radium, { StyleRoot } from 'radium';

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
    const btnStyle = {
      backgroundColor: '#1152c3',
      border: '1px solid #021154',
      color: '#fff',
      cursor: 'pointer',
      marginBottom: '20px',
      outline: 'none',
      padding: '10px',
      transition: 'background 200ms ease-in-out',
      ':hover': {
        backgroundColor: '#5e99ff'
      }
    }

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {

            const charList = person.name.split('').map((ch, i) => {
              return <Char character={ch} key={i} clicked={() => this.deleteCharHandler(i, person.id)}/>;
            }); 

            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              nameList={charList}
              changed={(event) => this.nameChangedHandler(event, person.id)}  />
          })}
        </div>
      );

      btnStyle.backgroundColor = '#7ff5b8';
      btnStyle.color = '#000';
      btnStyle[':hover'] = {
        backgroundColor: '#c0ffde'
      }
    }

    let emptyWarning = '';
    const classes = ['red', 'bold'];

    if (this.state.persons.length <= 2) {
      emptyWarning = <p className={classes.join(' ')}>Running low on people</p>;
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>React App</h1>
          {emptyWarning}
          <button
            style={btnStyle}
            onClick={this.togglePersonsHandler}>Toggle List View</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
