import React, { Component } from 'react';
import classes from './App.css';
import WithClass from '../hoc/WithClass';
import Lsp from '../components/Lsp/Lsp';
import PersonPanel from '../components/Panel/Person/PersonPanel';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor()');
    this.state = {
      entitySelect: 'person'
    }
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount()');
  }

  onSelectPerson = () => {
      this.setState(
        {
          entitySelect: 'person'
        }
      );

  }

  onSelectAddress = () => {
    this.setState(
      {
        entitySelect: 'address'
      }
    );
}

  render() {
    console.log('[App.js] render()');
    // console.log(classes);
    let entity = null;
    if ('person' === this.state.entitySelect) {
      entity = (
        <PersonPanel />
      )
    }
    return (
      <WithClass classes={classes.App}>
        <Lsp
           personClicked={this.onSelectPerson}
           addressClicked={this.onSelectAddress} />
        {entity}
      </WithClass>
    );
  }
}

export default App;
