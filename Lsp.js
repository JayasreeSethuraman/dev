import React from 'react';
//import WithClass from '../hoc/WithClass';
import classes from './Lsp.css';

const lsp = (props) => {
    let lspClass = classes.Lsp;
    return (
        <div className={lspClass}>
            <button onClick={props.personClicked}>Person</button>
            <button onClick={props.addressClicked}>Address</button>
        </div>
    );
}

export default lsp;