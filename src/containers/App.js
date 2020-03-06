import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import logo from './logo.svg';
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
import classes from './App.css';
import WithClass from '../hoc/WithClass';

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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    //const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

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
      <WithClass classes={classes.App}>
        <button onClick={() => { this.setState({ showCockpitStatus: false }); }}>Remove Cockpit</button>
        {this.state.showCockpitStatus ? (<Cockpit
          title={this.props.appTitle}
          showPersons={this.state.personStatus}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
        />) : null}
        {person}
      </WithClass >
    );

    //return React.createElement('div', null, React.createElement('h1', null, 'This is a header section !!!'));
  }
}

export default App;

