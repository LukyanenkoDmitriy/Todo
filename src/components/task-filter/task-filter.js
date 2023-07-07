import React, { Component } from 'react';

export default class TaskFilter extends Component {
  render() {
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
}
