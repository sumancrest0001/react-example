import React, { Component } from 'react';
// import styled from 'styled-components';
import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('[person.js] rendering');

    return (// <div className="Person" style={style}>
      <div className={classes.Person}>
        <h2 onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</h2>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} defaultValue={this.props.name} />

      </div>);
  };
}

export default Person;