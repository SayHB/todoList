import React, {Component} from 'react';

class TodoItem extends Component {
    handleClick = () =>{
        this.props.delete(this.props.index);
    }
    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                {this.props.content}
            </div>
        );
    }
}

export default TodoItem;