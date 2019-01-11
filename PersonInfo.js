import React from 'react';
import WithClass from '../../../hoc/WithClass';
import classes from '../../Panel/Panel.css';

const personInfo = (props) => {
  // let inputFields = [];
  // // if ( Object.getOwnPropertyNames(props.person).length !== 0 ) {
  //   let inputValue = Object.values(props.person);
  //   console.log(props);
  //   for (let index = 0; index < Object.keys(props.person).length; index++) {
  //     // let field = props.personFields[index];
  //     inputFields.push(
  //         <div>
  //           <label>{props.personFields[index]}</label>
  //           <input type="text" 
  //                  value={inputValue[index]} />
  //         </div>
  //     );
  // }
  // }

  return (
    <WithClass classes={classes.Panel}>
    {/* {console.log(props)} */}
      <div>
        <label>id</label>
        <input type="text" 
               value={props.person.id || ''} />
      </div>
      <div>
        <label>firstName</label>
        <input type="text" 
               value={props.person.firstName || ''} />
      </div>
      <div>
        <label>lastName</label>
        <input type="text" 
               value={props.person.lastName || ''} />
      </div>
      <div>
        <label>email</label>
        <input type="text" 
               value={props.person.email || ''} />
      </div>
      <div>
        <label>birthDay</label>
        <input type="text" 
               value={props.person.birthDay || ''} />
      </div>
      <div>
        <label>isAdmin</label>
        <input type="text" 
               value={props.person.isAdmin || false} />
      </div>
      <button>Submit</button>
      <button>Reset</button>
    </WithClass>
  );
}

export default personInfo;
