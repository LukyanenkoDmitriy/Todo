import React, { Component } from 'react';

export default class TaskFilter extends Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <button className="filter-btn__all" onClick={() => this.props.handleFilterChange('all')}>All</button>
        </li>
        <li>
          <button className="filter-btn__completed" onClick={() => this.props.handleFilterChange('completed')}>Completed</button>
        </li>
        <li>
          <button className="filter-btn__active" onClick={() => this.props.handleFilterChange('active')}>Active</button>
        </li>
      </ul>
    )
  }
}
