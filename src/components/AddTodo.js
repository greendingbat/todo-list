import React, { Component } from 'react'
import '../App.css'
export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState( { [e.target.name]: e.target.value } );
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.trim() !== '') {
            this.props.addTodo(this.state.title);
        }
        this.setState( { title: '' } );
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} className='form'>
                <input 
                    type="text" 
                    name="title"
                    className='submit' 
                    placeholder="Add Todo"
                    value = {this.state.title}
                    onChange={this.onChange} 
                />
                <input 
                    type="submit"  
                    value="Add Item"
                    className="subBtn"
                />
            </form>
        )
    }
}

export default AddTodo
