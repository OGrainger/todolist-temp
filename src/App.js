import React, {Component} from 'react';
import './App.css';
import TodoItem from "./todo-item";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    label: 'Faire les courses'
                },
                {
                    id: 2,
                    label: 'Manger'
                }
            ]
        };
    }

    removeTodo = () => {

    };

    render() {
        return (
            <div className="App">
                {this.state.todos.map((todo) => <TodoItem
                    key={todo.id}
                    label={todo.label}
                    remove={this.removeTodo}
                />)}
            </div>
        );
    }
}

export default App;
