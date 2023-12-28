"use client";
import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transcript: "",
            customer: "",
            tasks: []
        };
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    AddTask = () => {
        this.setState(state => ({
            tasks: [...state.tasks, { transcript: state.transcript, customer: state.customer }],
            transcript: "",
            customer: ""
        }));
    }

    deleteTask = (index) => {
        this.setState(state => {
            const tasks = [...state.tasks];
            tasks.splice(index, 1);
            return { tasks };
        });
    }

    render() {
        const rows = this.state.tasks.map((task, i) => (
            <tr key={i}>
                <td>{task.transcript}</td>
                <td>{task.customer}</td>
                <td>
                    <button onClick={() => this.deleteTask(i)}>Delete</button>
                </td>
                <td> <button> Generate Meeting Notes </button></td>
                <td> <button> Generate Email </button></td>
            </tr>
        ));

        return (
            <div>
                <h2>Task Manager</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Transcript Status</th>
                            <th>Meeting Name</th>
                            <th>Delete Task</th>
                            <th>Generate Meeting Notes</th>
                            <th>Generate Email</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
                <br/>
                <input
                    onChange={this.handleChange}
                    name="transcript"
                    placeholder="Transcript"
                    value={this.state.transcript}
                />
                <input
                    onChange={this.handleChange}
                    name="customer"
                    placeholder="Meeting Name"
                    value={this.state.customer}
                />
               
                <button onClick={this.AddTask}>Generate Task</button>
            </div>
        );
    }
}

export default Hello;