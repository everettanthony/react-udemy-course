import React, { Component } from 'react';
import styles from './App.module.css';
import People from '../components/People//People';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Tony', age: 43 },
      { id: 2, name: 'Heather', age: 43 },
      { id: 3, name: 'Lorelei', age: 8 },
      { id: 4, name: 'Layla', age: 6 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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
  
    this.setState((prevState, props) => {
      return {
        persons: personsNew,
        changeCounter: prevState.changeCounter + 1
      };
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  toggleCockpitHandler = () => {
    const isShowing = this.state.showCockpit;
    this.setState( { showCockpit: !isShowing } );
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

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] render:');
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <People
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} 
          deleteChar={this.deleteCharHandler} 
          isAuthenticated={this.state.authenticated} />    
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.toggleCockpitHandler()
          }}>Toggle Cockpit View
        </button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
        {
          this.state.showCockpit ? 
            <Cockpit 
              title={this.props.appTitle}
              // changeCounter={this.state.changeCounter}
              showPersons={this.state.showPersons} 
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler} /> : null
        }  
        {/* <div>{this.state.changeCounter}</div> */}
        {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, styles.app);
