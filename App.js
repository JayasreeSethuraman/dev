import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Jay', age:22},
      {name:'ibbu', age:21},
      {name:'Bama', age:52}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log("button clicked!");
    //this.state.persons[0].name = 'Jayasree';
    this.setState(
      {
        persons: [
          {name:newName, age:22},
          {name:'ibbu', age:22},
          {name:'Bama', age:52}
        ]
      }
    );
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        persons: [
          {name:'jay', age:22},
          {name:event.target.value, age:22},
          {name:'Bama', age:52}
        ]
      }
    );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '5px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, This is React</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>toggle Persons</button>
        { this.state.showPersons ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'Jai')}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}>
              working in IT company</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}/>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
