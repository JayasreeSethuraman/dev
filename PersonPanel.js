import React, { Component } from 'react';
import WithClass from '../../../hoc/WithClass';
import ListPersonPanel from './ListPersonPanel';
import InfoPersonPanel from './InfoPersonPanel';

class PersonPanel extends Component {

    constructor(props) {
        super(props);
        console.log('[PersonPanel.js] constructor()');
        this.state = {
            persons: [
                {id: 1,
                 firstName: 'Jay',
                 lastName: 'Sethuraman',
                 email: 'jay@gmail.com'
                },
                {id: 2,
                 firstName: 'Abarna',
                 lastName: 'Sethuraman',
                 email: 'abarna@gmail.com'
                },
                {id: 3,
                 firstName: 'Bama',
                 lastName: 'Sethuraman',
                 email: 'bama@gmail.com'
                }
            ],
            selectedPerson: {}
        }
    }

    componentWillMount() {
        console.log('[PersonPanel.js] componentWillMount()');
    }

    onPersonClick = (index) => {
        const person = this.state.persons[index];
        this.setState({selectedPerson: person});
    }

    onAddSelect() {
        // const person = {};
        // this.setState({ selectedPerson: {} });
    }

    render() {
        console.log('[PersonPanel.js] render()');
        let personFields = ['id', 'firstName', 'lastName', 'email'];
        return(
            <WithClass>
                <ListPersonPanel 
                    persons={this.state.persons}
                    clicked={this.onPersonClick}
                    addClicked={this.onAddSelect} />
                
                <InfoPersonPanel 
                    person={this.state.selectedPerson}
                    personFields={personFields} />
            </WithClass>
        );
    }
}

export default PersonPanel;
