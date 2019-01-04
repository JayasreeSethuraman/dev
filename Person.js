import React from 'react';

const person = (props) => {
    return (
        <tbody>
        <tr onClick={() => props.clicked(props.index)}>
            <td>{props.person.id}</td>
            <td>{props.person.firstName}</td>
            <td>{props.person.lastName}</td>
            <td>{props.person.email}</td>
        </tr>
        </tbody>
    );
}

export default person;