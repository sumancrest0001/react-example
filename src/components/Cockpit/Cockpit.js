import React, { useEffect } from 'react';
import classes from './Cockpit.css';
import Aux from './../../hoc/Aux';

const cockpit = (props) => {
  useEffect(() => {
    console.log('Cockpit:useEffect');
    // following code controls the execution of useEffect. It will execute only when props.persons change
    const timer = setTimeout(() => {
      alert('UseEffect is executing');
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] clean up work in useEffect');
    };

  }, []); // [props.persons] // is used instead of props.persons to run it initially only.

  useEffect(() => {
    console.log('[cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] clean up work in 2nd useEffect');
    };
  });

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
        <button className={btnClass} onClick={props.clicked}>Switch Name</button>
      </div>
      <div key='i2'>This is adjacent div</div>
    </Aux>
  );
}

export default React.memo(cockpit);