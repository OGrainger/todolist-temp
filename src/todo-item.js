import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        remove: PropTypes.func.isRequired
    };

    handleRemoveClick = () => {
        this.props.remove(this.props);
    };

    render() {

        let label = this.props.label;
        return (
            <div>
                <div className="todo-label">
                    {label}
                </div>
                <button> +</button>
                <button onClick={this.handleRemoveClick}> -</button>
            </div>


        );
    }
}

export default TodoItem;
