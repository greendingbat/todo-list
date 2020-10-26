import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {v4 as uuid} from 'uuid';

import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid(),
        title: 'Learn React',
        completed: false
      },
      {
        id: uuid(),
        title: 'Build Todo List app',
        completed: false
      },
      {
        id: uuid(),
        title: 'Refactor code',
        completed: false
      },
      {
        id: uuid(),
        title: 'Apply to SOPHIA team',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    
    this.setState( { todos: this.state.todos.filter(todo => {
      return todo.id !== id
    }) })
    if (this.state.todos.length === 1) {
      alert('Congrats on finishing your list!')
    }
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <div className='container'>
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
                <div className='addTodo'><AddTodo addTodo={this.addTodo}/></div>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
