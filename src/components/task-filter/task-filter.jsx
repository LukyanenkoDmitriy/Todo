import PropTypes from 'prop-types'

export default function TaskFilter({ filterTasks }) {
  return (
    <ul className="filters">
      <li>
        <button className="filter-btn__all" onClick={() => filterTasks('all')}>
          All
        </button>
      </li>
      <li>
        <button className="filter-btn__completed" onClick={() => filterTasks(false)}>
          Completed
        </button>
      </li>
      <li>
        <button className="filter-btn__active" onClick={() => filterTasks(true)}>
          Active
        </button>
      </li>
    </ul>
  )
}

TaskFilter.defaultProps = {
  filterTasks: () => {},
}

TaskFilter.propTypes = {
  filterTasks: PropTypes.func,
}
