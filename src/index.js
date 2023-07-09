import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';

import Footer from './components/footer';
import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';

import "./main.css"
import './additional.css';

class App extends Component {

  newId = 10;

  state = {
    data: [
      this.createTask('First task'),
      this.createTask('Second task'),
      this.createTask('Third task'),
    ],
    filter: 'all',
  }

  createTask(text) {
    return {
      id: this.newId++,
      label: text,
      isCompleted: false,
      isChecked: false,
    }
  }

  addTask = (text) => {
    const newTask = this.createTask(text)
    this.setState(({ data }) => {
      return {
        data: [newTask, ...data]
      }
    })
  }

  deleteTask = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(task => task.id !== id)
      }
    })
  }

  onCompletedTask = (id) => {
    this.setState(({ data }) => {
      const idx = data.findIndex(task => task.id === id);
      const oldTask = data[idx];
      const newTask = { ...oldTask, isCompleted: !oldTask.isCompleted, isChecked: !oldTask.isChecked };

      const newData = [
        ...data.slice(0, idx),
        newTask,
        ...data.slice(idx + 1)
      ];

      return {
        data: newData
      };
    });
  }
  clearCompletedTasks = () => {
    this.setState(({ data }) => {
      const newData = data.filter(task => !task.isCompleted);
      return {
        data: newData
      };
    });
  };


  handleFilterChange = (newFilter) => {
    this.setState({ filter: newFilter });
  };


  render() {
    const { data, filter } = this.state
    const activeTasks = data.filter(task => !task.isCompleted).length;

    const filteredTasks = data.filter((task) => {
      if (filter === 'completed' && task.isCompleted) {
        return task
      }
      if (filter === 'active' && !task.isCompleted) {
        return task;
      }
      if (filter === 'all') {
        return task;
      }
    })

    return (
      <>
        <header>
          <h1>Todos</h1>
          <NewTaskForm
            addTask={this.addTask}
          />
        </header>
        <TaskList
          filteredTasks={filteredTasks}
          onDeleted={this.deleteTask}
          onCompleted={this.onCompletedTask}
        />

        <Footer
          activeTasks={activeTasks}
          handleFilterChange={this.handleFilterChange}
          clearCompletedTasks={this.clearCompletedTasks}
        />
      </>
    )
  }
}

const todoApp = document.querySelector('.todoapp')
createRoot(todoApp).render(<App />);