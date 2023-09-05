import { useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

export default function NewTaskForm({ todo, setTodo }) {
  const [description, setDescription] = useState('')
  const [taskMin, setTaskMin] = useState('')
  const [taskSec, setTaskSec] = useState('')

  function addTask(e) {
    e.preventDefault() // Предотвращаем отправку формы браузером
    if (Number(taskSec) > 60) {
      alert('Seconds should be no more than 60')
      return
    }
    if (description && taskMin !== '' && taskSec !== '') {
      setTodo([
        {
          id: uuidv4(),
          title: description,
          completed: false,
          taskHour: 0,
          taskMin: taskMin,
          taskSec: taskSec,
        },
        ...todo,
      ])
      setDescription('')
      setTaskMin('')
      setTaskSec('')
    } else {
      alert('Please enter a task, minutes, and seconds.')
    }
  }

  return (
    <form className="new-todo-form ">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        autoFocus
      />
      <input
        className="new-todo_time"
        type="number"
        placeholder="min"
        value={taskMin}
        onChange={(e) => setTaskMin(e.target.value)}
      />
      <input
        className="new-todo_time"
        type="number"
        placeholder="sec"
        value={taskSec}
        onChange={(e) => setTaskSec(e.target.value)}
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
