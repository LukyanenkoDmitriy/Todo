import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import Footer from './components/footer';
import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';

import "./main.css"
import './additional.css';

class App extends Component {

  state = {
    data: [
      { label: 'First label', id: 1 },
      { label: 'Second label', id: 2 },
      { label: 'Third label', id: 3 }
    ]
  }

  deleteTask = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(task => task.id !== id)
      }
    })
  }

  render() {
    const { data } = this.state
    return (
      <>
        <header>
          <h1>Todos</h1>
          <NewTaskForm />
        </header>
        <TaskList
          todos={data}
          onDeleted={this.deleteTask}
        />
        <Footer />
      </>
    )
  }
}

const todoApp = document.querySelector('.todoapp')
createRoot(todoApp).render(<App />);