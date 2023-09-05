import { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../task-timer/timer'

export default function Task({ todo, setTodo, id, title, completed, onDeleteTask, onCompleteTask }) {
  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')
  const [createdTime] = useState(new Date())

  const task = todo.find((taskItem) => taskItem.id === id)

  let classNames = 'description'

  completed ? (classNames += ' completed') : (classNames += '')

  function onEditTask(id, title) {
    setEdit(id)
    setValue(title)
  }

  function saveTask(id) {
    const newTodo = todo.map((taskItem) => {
      if (taskItem.id === id) {
        return { ...taskItem, title: value }
      }
      return taskItem
    })
    setTodo(newTodo)
    setEdit(null)
  }

  function getCreatedTime() {
    const timeAgo = formatDistanceToNow(createdTime, { addSuffix: true })
    return `created ${timeAgo}`
  }

  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed} onChange={() => onCompleteTask(id)} />
      {edit === id ? (
        <label>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button type="button" onClick={() => saveTask(id)}>
            Save
          </button>
        </label>
      ) : (
        <label>
          <span className={classNames} onClick={() => onCompleteTask(id)}>
            {title}
          </span>
          <Timer
            taskMin={task ? parseInt(task.taskHour) * 60 + parseInt(task.taskMin) : 0}
            taskSec={task ? parseInt(task.taskSec) : 0}
            onTimerComplete={() => {
              // Действия, которые нужно выполнить по истечении времени (например, пометить задачу как завершенную)
              onCompleteTask(id)
            }}
          />
          <span className="created">{getCreatedTime()}</span>
        </label>
      )}

      {edit === id ? (
        <div></div>
      ) : (
        <div>
          <button className="icon icon-edit" onClick={() => onEditTask(id, title)} />
          <button className="icon icon-destroy" onClick={() => onDeleteTask(id)} />
        </div>
      )}
    </div>
  )
}

Task.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object),
  setTodo: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  completed: PropTypes.bool,
  onDeleteTask: PropTypes.func,
  onCompleteTask: PropTypes.func,
}
