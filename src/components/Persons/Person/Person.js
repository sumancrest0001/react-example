import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElement = React.createRef()
  }

  static contextType = AuthContext;
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElement.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[person.js] rendering');

    return (// <div className="Person" style={style}>
      <Aux>
        {/* <AuthContext.Consumer>
          {(context) => context.authenticated ? <p>You are Authenticate !!</p> : <p>Please login</p>}
        </AuthContext.Consumer> */}

        {this.context.authenticated ? <p>You are Authenticate !!</p> : <p>Please login</p>}
        <h2 onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</h2>
        <p key="i2">{this.props.children}</p>
        <input
          type="text"
          key="i3"
          //ref={(inputEl) => { this.inputElement = inputEl }}
          ref={this.inputElement}
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </Aux>);
  };
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.string,
  onChange: PropTypes.func,
};

export default withClass(Person, classes.Person);