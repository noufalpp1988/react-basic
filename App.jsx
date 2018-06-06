import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    "id": 1,
                    "name": "Noufal",
                    "age": "20"
                },
                {
                    "id": 2,
                    "name": "Sani",
                    "age": "30"
                },
                {
                    "id": 3,
                    "name": "riya",
                    "age": "10"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Header />
                <table>
                    <tbody>
                        {this.state.data.map((persondetails, i) => <TableRow key={i} data={persondetails} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h2>Header component</h2>
            </div>
        );
    }
}
class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}


export default App;