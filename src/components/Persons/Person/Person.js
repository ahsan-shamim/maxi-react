import React from 'react';
import './Person.css';

const Person = (props) => (
  <div className="person">
    <h2 onClick={props.click}>I am {props.name} and {props.age} years old</h2>
    <input type="text" onChange={props.changed} value={props.name}/>
  </div>
);

export default Person;