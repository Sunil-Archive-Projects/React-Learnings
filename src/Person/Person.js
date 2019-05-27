import React from 'react';

import './Person.css';

const Person = (props) => {
    return(
        <div className="Person" onClick = {props.click}>
            <p>I am called the {props.name}</p>
            <p>I am {props.age} old in Earth years</p>
            <input type="text" onChange = {props.changed}/>
        </div>
    )
}

export default Person;