import React, { Component } from 'react';

export default class TaskFilter extends Component {

  render() {
    const { filterCompleted, filterActive, filterAll } = this.props;
    return (
      <ul className="filters">
        <li>
          <button
            className="filter-btn__all"
            onClick={filterAll}
          >All</button>
        </li>
        <li>
          <button
            className="filter-btn__active"
            onClick={filterActive}
          >Active</button>
        </li>
        <li>
          <button
            className="filter-btn__completed"
            onClick={filterCompleted}
          >Completed</button>
        </li>
      </ul>
    )
  }
}