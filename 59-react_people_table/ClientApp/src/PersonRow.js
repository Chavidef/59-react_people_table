
import React from 'react';

class PersonRow extends React.Component {

    CheckAge = (age) => {
        let className = ''
        if (age >= 65) {
            className = 'bg-danger'
        }
        return className
    }

    render() {
        const { person, key } = this.props;
        return (
            <>
                <tr key={key} className={this.CheckAge(person.age)} >
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.age}</td>
                </tr>
            </>
        )
    }
}


export default PersonRow;
