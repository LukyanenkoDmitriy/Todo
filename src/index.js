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
  }

  createTask(text) {
    return {
      label: text,
      isCompleted: false,
      isChecked: false,
      id: this.newId++,
    }
  }

  deleteTask = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(task => task.id !== id)
      }
    })
  }

  addTask = (text) => {
    const newTask = this.createTask(text)
    this.setState(({ data }) => {
      return {
        data: [newTask, ...data]
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

  filterAll = () => {
    this.setState(({ data }) => {
      return {
        data: [...data]
      }
    });
  }

  filterCompleted = () => {
    this.setState(({ data }) => {
      return {
        data: data.filter(task => task.isCompleted)
      }
    })
  }

  filterActive = () => {
    this.setState(({ data }) => {
      return {
        data: data.filter(task => !task.isCompleted)
      }
    })
  }

  render() {
    const { data } = this.state
    const activeTasks = data.filter(task => !task.isCompleted).length;

    return (
      <>
        <header>
          <h1>Todos</h1>
          <NewTaskForm
            addTask={this.addTask}
          />
        </header>
        <TaskList
          todos={data}
          onDeleted={this.deleteTask}
          onCompleted={this.onCompletedTask}
        />
        <Footer
          activeTasks={activeTasks}
          filterCompleted={this.filterCompleted}
          filterActive={this.filterActive}
          filterAll={this.filterAll}
        />
      </>
    )
  }
}

const todoApp = document.querySelector('.todoapp')
createRoot(todoApp).render(<App />);