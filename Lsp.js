import React from 'react';
//import WithClass from '../hoc/WithClass';
import classes from './Lsp.css';
import { Link } from 'react-router-dom';

const lsp = (props) => {
    let lspClass = classes.Lsp;
    // console.log('lsp');
    return (
        <div className={lspClass}>
            <Link to= "/person">Person</Link>
            <Link to="/address">Address</Link>
        </div>
    );
}

export default lsp;