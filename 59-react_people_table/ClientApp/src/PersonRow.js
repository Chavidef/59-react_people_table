
import React from 'react';

class PersonRow extends React.Component {


    render() {
        return (
            <>
                <tr>
                    <td>{this.firstName}</td>
                    <td>{this.lastName}</td>
                    <td>{this.age}</td>
                </tr>
            </>
        )
    }
}


export default PersonRow;
