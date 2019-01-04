import React from 'react';
import WithClass from '../../../hoc/WithClass';
import classes from '../../Panel/Panel.css';

const infoPersonPanel = (props) => {
  let inputFields = [];
  let inputValue = Object.values(props.person);
  console.log(props.person.id);
  for (let index = 0; index < Object.keys(props.person).length; index++) {
    // let field = props.personFields[index];
    inputFields.push(
        <div>
          <label>{props.personFields[index]}</label>
          <input type="text" value={inputValue[index]} />
        </div>
    );
  }

  return (
    <WithClass classes={classes.Panel}>
      {inputFields}
      <button>Submit</button>
      <button>Reset</button>
    </WithClass>
  );
}

export default infoPersonPanel;