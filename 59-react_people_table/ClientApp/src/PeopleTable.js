import React from 'react';
import PersonRow from './PersonRow';
import PersonForm from './PersonForm';

class PeopleTable extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: 0,
        people: []
    }

    onFirstNameChange = e => {
        this.setState({ firstName: e.target.value })
    }

    onLastNameChange = e => {
        this.setState({ lastName: e.target.value })
    }

    onAgeChange = e => {
        this.setState({ age: e.target.value })
    }

    onAddClick() {
        const { firstName } = this.state;

        //const { firstName, lastName, age } = this.state;
        
        //const person = { firstName, lastName, age } = this.state;
        //const copyPeople = [person, ...people];
        //const copyPeople = [{ firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age }, ...{ people: this.state.people }];
        //this.setState({ people: copyPeople, first: '', last: '', age: '' });
        //console.log(this.state.people);
    }

    render() {
        return (
            <div className='container mt-5'>
                <PersonForm firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age}
                    onFirstNameChange={this.onFirstNameChange} onLastNameChange={this.onLastNameChange} onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick} onClearClick={this.onClearClick}/>
                <table className='table table-bordered table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <PersonRow people={this.state.people} />
                    </tbody>
                </table>
            </div>
        )
    }
}
export default PeopleTable;