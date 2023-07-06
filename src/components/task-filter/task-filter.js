import React from 'react';

const TaskFilter = (props) => {
  return (
    <ul className="filters">
      <li>
        <button className="filter-btn__all">All</button>
      </li>
      <li>
        <button className="filter-btn__active">Active</button>
      </li>
      <li>
        <button className="filter-btn__completed">Completed</button>
      </li>
    </ul>

  )
}
export default TaskFilter;