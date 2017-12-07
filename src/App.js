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
                    label: 'Faire les courses',
                    completed: false
                },
                {
                    id: 2,
                    label: 'Manger',
                    completed: false
                }
            ]
        };
    }

    removeTodo = (todoId) => {
        console.log(todoId);
        const newTodos = this.state.todos.filter((todo) => todo.id !== todoId);

        this.setState({
            todos: newTodos
        })
    };

    completeTodo = (todoId) => {
        console.log(todoId);
        const newTodos = this.state.todos.map((todo) => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({
            todos: newTodos
        })
    };

    render() {
        return (
            <div className="App">
                {this.state.todos.map((todo) =>
                    <TodoItem
                        todo={todo}
                        remove={this.removeTodo}
                        complete={this.completeTodo}
                    />)}
            </div>
        );
    }
}

export default App;
