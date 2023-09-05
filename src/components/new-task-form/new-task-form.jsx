import { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

export default function NewTaskForm({ todo, setTodo }) {
  const [description, setDescription] = useState('')
  const [taskMin, setTaskMin] = useState('')
  const [taskSec, setTaskSec] = useState('')

  function addTask(e) {
    e.preventDefault()
    if (!description) {
      alert('Please enter a task')
      return
    }
    const newTask = {
      id: uuidv4(),
      title: description,
      completed: false,
      taskHour: 0,
      taskMin,
      taskSec,
    }
    setTodo([newTask, ...todo])
    setDescription('')
    setTaskMin('')
    setTaskSec('')
  }

  return (
    <form className="new-todo-form ">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        autoFocus
      />
      <input
        className="new-todo_time"
        type="number"
        placeholder="min"
        value={taskMin}
        onChange={(e) => setTaskMin(e.target.value)}
        min={0}
        max={1440}
        required
      />
      <input
        className="new-todo_time"
        type="number"
        placeholder="sec"
        value={taskSec}
        onChange={(e) => setTaskSec(e.target.value)}
        min={0}
        max={60}
        required
      />
      <button type="submit" onClick={addTask}></button>
    </form>
  )
}

NewTaskForm.defaultProps = {
  todo: [],
  setTodo: () => {},
}

NewTaskForm.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object),
  setTodo: PropTypes.func,
}
