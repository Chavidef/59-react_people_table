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

    onAddClick = () => {

        const { firstName, lastName, age, people } = this.state;
        
        const person = { firstName, lastName, age };
        const copyPeople = [person, ...people];
        this.setState({ people: copyPeople, firstName: '', lastName: '', age: '' });
        
    }

    onClearClick = () => {
        this.setState({ people: [] });
    }
    generateBody = () => {
        if (this.state.people.length == 0) {
            return <h1>No people yet! You be the Nachshon!</h1>
        }
        else {
            return (
                <>
                    <table className='table table-bordered table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.people.map((p, k) => <PersonRow person={p} key={k} />)}
                        </tbody>
                    </table>
                </>
                )
        }
    }

    render() {
       
        return (
            <div className='container mt-5'>
                <PersonForm firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age}
                    onFirstNameChange={this.onFirstNameChange} onLastNameChange={this.onLastNameChange} onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick} onClearClick={this.onClearClick} />
                {this.generateBody()}
            </div>
        )
    }
}
export default PeopleTable;