import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import Aux from './../../hoc/Aux';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('Cockpit:useEffect');
    // following code controls the execution of useEffect. It will execute only when props.persons change
    /*  const timer = setTimeout(() => {
       alert('UseEffect is executing');
     }, 1000); */
    return () => {
      console.log('[Cockpit.js] clean up work in useEffect');
    };

  }, []); // [props.persons] // is used instead of props.persons to run it initially only.

  useEffect(() => {
    console.log('[cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] clean up work in 2nd useEffect');
    };
  });

  const rand = Math.random();

  if (rand > 0.7) {
    throw new Error('Something Went Wrong');
  }

  const authContext = useContext(AuthContext);
  let btnClass = '';
  const assignedClasses = [];

  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Aux>
      <div key='i1' className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is working</p>
        <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Switch Name</button>
        {/* <AuthContext.Consumer>
          {(context) => <button onClick={context.login}>Log In</button>}
        </AuthContext.Consumer> */}

        <button onClick={authContext.login}>Log In</button>
      </div>
      <div key='i2'>This is adjacent div</div>
    </Aux>
  );
}

export default React.memo(cockpit);