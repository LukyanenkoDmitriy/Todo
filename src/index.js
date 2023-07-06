import React from 'react';
import { createRoot } from 'react-dom/client';

import Footer from './components/footer';
import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';

import "./index.css"

const todoApp = document.querySelector('.todoapp')

const data = [
  { label: 'First label' },
  { label: 'Second label' },
  { label: 'Third label' }
]
function App() {
  return (
    <>
      <header>
        <h1>Todos</h1>
        <NewTaskForm />
      </header>
      <TaskList todos={data} />
      <Footer />
    </>
  )

}
createRoot(todoApp).render(<App />);