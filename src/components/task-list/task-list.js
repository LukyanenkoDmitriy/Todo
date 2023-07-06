import React from 'react';

import Task from '../task'

function TaskList({ todos }) {
  const elements = todos.map((todo) => {
    return (
      <Task {...todo} />
    )
  })
  return (
    <ul className='todo-list'>
      {elements}
    </ul>
  )
}
export default TaskList;