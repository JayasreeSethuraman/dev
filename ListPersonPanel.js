import React from 'react';
import WithClass from '../../../hoc/WithClass';
import Person from './Person';
import classes from '../../Panel/Panel.css';

const listPersonPanel = (props) => {
    let persons = 
        props.persons.map((person, index) => {
            return <Person 
                        key={person.id}
                        index={index}
                        person={person}
                        clicked={props.clicked} />
        }
    );

    return(
        <WithClass classes={classes.Panel}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FIRSTNAME</th>
                        <th>LASTNAME</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                {persons}
            </table>
            <button onClick={props.addClicked}>Add</button>
        </WithClass>
    );
}

export default listPersonPanel;