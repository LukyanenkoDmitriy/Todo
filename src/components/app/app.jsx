import { useEffect, useState } from 'react'
import '../../main.css'
import '../../additional.css'

import Footer from '../footer/footer'
import NewTaskForm from '../new-task-form/new-task-form'
import TaskList from '../task-list/task-list'

export default function App() {
  const [todo, setTodo] = useState([
    {
      id: '1',
      title: 'First task',
      completed: false,
      taskHour: '0',
      taskMin: '10',
      taskSec: '1',
    },
    {
      id: '2',
      title: 'Second task',
      completed: true,
      taskHour: '0',
      taskMin: '10',
      taskSec: '1',
    },
    {
      id: '3',
      title: 'Third task',
      completed: false,
      taskHour: '0',
      taskMin: '10',
      taskSec: '1',
    },
  ])
  const [filtered, setFiltered] = useState(todo)

  const activeTasks = todo.filter((task) => !task.completed).length
  useEffect(() => {
    setFiltered(todo)
  }, [todo])

  function filterTasks(filter) {
    if (filter === 'all') {
      setFiltered(todo)
    } else {
      setFiltered(todo.filter((item) => item.completed !== filter))
    }
  }

  function clearCompleted() {
    const newTodo = todo.filter((item) => !item.completed)
    setTodo(newTodo)
  }

  return (
    <>
      <header>
        <h1>Todos</h1>
      </header>
      <NewTaskForm todo={todo} setTodo={setTodo} />
      <TaskList todo={todo} setTodo={setTodo} filtered={filtered} />
      <Footer filterTasks={filterTasks} activeTasks={activeTasks} clearCompleted={clearCompleted} />
    </>
  )
}
