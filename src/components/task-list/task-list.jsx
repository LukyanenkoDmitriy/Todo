import PropTypes from 'prop-types'

import Task from '../task/task'

export default function TaskList({ todo, setTodo, filtered }) {
  function onDeleteTask(id) {
    const newTodo = todo.filter((task) => task.id !== id)
    setTodo(newTodo)
  }

  function onCompleteTask(id) {
    const newTodo = todo.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTodo(newTodo)
  }

  const tasks = filtered.map((item) => {
    const { id, title, completed } = item
    return (
      <li key={id}>
        <Task
          id={id}
          title={title}
          todo={todo}
          setTodo={setTodo}
          completed={completed}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
        />
      </li>
    )
  })
  return <ul className="todo-list">{tasks}</ul>
}

TaskList.defaultProps = {
  todo: [],
  setTodo: () => {},
  filtered: [],
}

TaskList.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object),
  setTodo: PropTypes.func,
  filtered: PropTypes.arrayOf(PropTypes.object),
}
