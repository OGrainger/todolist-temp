import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    static propTypes = {
        todo: PropTypes.object.isRequired,
        remove: PropTypes.func.isRequired,
        complete: PropTypes.func.isRequired

};

    handleRemoveClick = (e) => {
        this.props.remove(this.props.todo.id);
    };

    handleCompleteClick = (e) => {
        console.log(this.props);
        this.props.complete(this.props.todo.id);
    };

    render() {

        let label = this.props.todo.label;
        return (
            <div>
                <div className="todo-label">
                    {label}
                </div>
                <button onClick={this.handleCompleteClick}> + </button>
                <button onClick={this.handleRemoveClick}> - </button>
            </div>


        );
    }
}

export default TodoItem;
