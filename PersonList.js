import React, { Component } from 'react';
import WithClass from '../../../hoc/WithClass';
import Person from './Person';
import classes from '../../Panel/Panel.css';
import axios from 'axios';
import PersonInfo from './PersonInfo';
import { Route } from 'react-router-dom';

class PersonList extends Component {
 
    constructor(props) {
        super(props);
        console.log('[PersonList.js] constructor()');
    }
    state = {
        persons: [],
        selectedPerson: {}
    }

    componentWillMount() {
        console.log('[PersonList.js] componentWillMount()');
    }

    onPersonClick = (index) => {
        const person = {...this.state.persons[index]};
        this.setState({selectedPerson: person});
        this.props.history.push(this.props.match.url + '/' + person.id);
    }

    componentDidMount() {
        console.log('[PersonList.js] componentDidMount()');
            console.log(this.props.location.pathname);
            this.doGetPerson();
    }

    componentDidUpdate () {
        console.log('[PersonList.js] componentDidUpdate()');
        // console.log(this.props);
        // console.log(this.state.persons);
        this.doGetPerson();
    }

    doGetPerson = () => {
        console.log(this.state);
        let path = this.props.location.pathname;
        let id = path.substring(path.lastIndexOf("/") + 1);
        let givenPerson = {};
        if (this.state.persons.length === 0) {
            console.log('hi');
            axios.get('http://localhost:8080/ws/do/person')
            .then(response => {
                console.log('promise');
                this.setState({
                    persons: response.data,
                    selectedPerson: response.data[0]
                })
                console.log(this.state.persons);
                     for (let key in this.state.persons) {
                        if (this.state.persons[key].id === +id) {
                            givenPerson = {...this.state.persons[key]};
                            console.log(this.state.persons[key]);
                            this.setState({selectedPerson: givenPerson});
                        }
                    }
                //  })
                //  .catch(error => {
                //      console.log(error);
                 });
                 console.log('j');
        }
    }

    onAddSelect = () => {
        this.setState({ selectedPerson: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            birthDay: '',
            password: '',
            isAdmin: '',
            createdDate: ''
        }});
        console.log(this.state.selectedPerson);
    }

    render() {
        console.log('[PersonList.js] render()');
        let persons = null;
        if (this.state.persons) {
            persons = this.state.persons.map((person, index) => {
                return (
                        <Person
                            key={person.id}
                            index={index}
                            person={person}
                            clicked={this.onPersonClick} />
                )
            });
        }
        // if (this.state.selectedPerson) {
        //     personDetails = (
        //         <Route path='/person/:id' render={ () =>
        //             <PersonInfo
        //             person={this.state.selectedPerson} />
        //         } />
        //     );
        // }

        return(
            <WithClass>
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
                    <button onClick={this.onAddSelect}>Add</button>
                </WithClass>
                <WithClass>
                    <Route path={'/person/:id'} render={ () =>
                        <PersonInfo {...this.props}
                            person={this.state.selectedPerson} />
                    } />
                </WithClass>
            </WithClass>
        );
        }
}

export default PersonList;
