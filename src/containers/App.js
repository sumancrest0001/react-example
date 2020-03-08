import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import logo from './logo.svg';
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
import classes from './App.css';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 'sadjhn', name: 'Suman', age: 23 },
      { id: 'sdfuihj1', name: 'John', age: 20 },
      { id: 'eudj23', name: 'Monica', age: 26 }
    ],
    otherValue: 'random value',
    personStatus: false,
    showCockpitStatus: true,
    changeCounter: 0,
    isAuthenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate...');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate...');
  }

  deletePersonHandler = (personIndex) => {
    //const person = this.state.persons.slice(); slice give a copy of the array and avoid mutating of persons array
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });

  }

  authenticationHandler = () => {
    this.setState({ isAuthenticated: true });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    //const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePersonHandler = () => {
    const showPerson = this.state.personStatus;
    this.setState({ personStatus: !showPerson });
  };

  render() {
    let person = null;

    if (this.state.personStatus) {
      person = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
    }

    return (
      <Aux >
        <button onClick={() => { this.setState({ showCockpitStatus: false }); }}>Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.isAuthenticated,
            login: this.authenticationHandler
          }}>
          {this.state.showCockpitStatus ? (<Cockpit
            title={this.props.appTitle}
            showPersons={this.state.personStatus}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
          />) : null}
          {person}
        </AuthContext.Provider>
      </Aux >
    );

    //return React.createElement('div', null, React.createElement('h1', null, 'This is a header section !!!'));
  }
}

App.propTypes = {
  title: PropTypes.string,
};

export default withClass(App, classes.App);

