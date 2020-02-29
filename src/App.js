import React, { Component } from 'react';
import Person from './Person/Person';
// import logo from './logo.svg';
// import Radium, { StyleRoot } from 'radium';
// import styled from 'styled-components';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'sadjhn', name: 'Suman', age: 23 },
      { id: 'sdfuihj1', name: 'John', age: 20 },
      { id: 'eudj23', name: 'Monica', age: 26 }
    ],
    otherValue: 'random value',
    personStatus: false,
  };

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
      person = (<div>
        {this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
        })}
      </div>);
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>This is my first react app</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button className='button' onClick={this.togglePersonHandler}>Switch Name</button>
        {person}
      </div >
    );

    //return React.createElement('div', null, React.createElement('h1', null, 'This is a header section !!!'));
  }
}

export default App;

