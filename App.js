import React from 'react';
import { Route } from 'react-router-dom';
import classes from './App.css';
import WithClass from '../hoc/WithClass';
import Lsp from '../components/Lsp/Lsp';
import PersonList from '../components/Panel/Person/PersonList';

const app = () => {
    return (
      <WithClass classes={classes.App}>
        <Lsp />
        <Route path='/person' component={PersonList}/>
      </WithClass>
    );
  }

export default app;
