import React from 'react';
import styled from 'styled-components';
// import './Person.css';

const StyledDiv = styled.div`
  width: 60%;
  padding: 16px;
  margin: auto;
  border: 2px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  text-align: center;
  margin-bottom: 16px;

  @media (max-width: 500px) {
    width: 450px;
    background-color: salmon;
  }
`
const person = (props) => {
  const style = {
    '@media (max-width: 500px)': {
      width: '450px',
      backgroundColor: 'salmon',
    }
  };

  return (// <div className="Person" style={style}>
    <StyledDiv>
      <h2 onClick={props.click}>I'm {props.name} and I am {props.age} years old</h2>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} defaultValue={props.name} />

    </StyledDiv>);
};

export default person;