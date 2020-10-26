import React, { Component } from 'react';
import '../App.css'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#3D405B',
            color: '#F4F1DE',
            padding: '10px',
            borderBottom: '2px #555 dashed',
            borderRadius: '5em',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind
                    (this, id)}/> 
                    {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} className="delBtn">X</button>
                </p>
            </div>
        )
    }
}


export default TodoItem
