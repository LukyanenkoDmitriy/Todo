import React, { Component } from 'react';

import TaskFilter from '../task-filter';

export default class Footer extends Component {
  render() {
    const { activeTasks, clearCompletedTasks } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{`${activeTasks} item left`}</span>
        <TaskFilter handleFilterChange={this.props.handleFilterChange} />
        <button className="clear-completed" onClick={clearCompletedTasks}>Clear completed</button>
      </footer>
    );
  }
}
