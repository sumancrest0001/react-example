import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';
// import { render } from 'react-dom';

class Persons extends PureComponent {
  /* static getDerivedStateFromProps(state, props) {
    console.log('[persons.js] getDerivedStateFromProps');
    return state;
  } */
  /* 
    shouldComponentUpdate(nextProps, nextState) {
      console.log('[Persons.js] shouldComponentUpdate..');
      if (nextProps.persons !== this.props.persons ||
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props.clicked) {
        return true;
      } else {
        return false;
      }
    } */

  /*  componentWillReceiveProps(props) {
     console.log('[Persons.js] componentWillReceiveProps...', props);
   } */

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate...');
    return { message: 'snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate....');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount...');
  }
  render() {
    return this.props.persons.map((person, index) => {

      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

Persons.propTypes = {
  clicked: PropTypes.func,
  changed: PropTypes.func
};

export default Persons;