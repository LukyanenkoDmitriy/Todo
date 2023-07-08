import React, { Component } from 'react';

import TaskFilter from '../task-filter';

export default class Footer extends Component {

  render() {
    const { activeTasks, filterCompleted, filterActive, filterAll } = this.props;
    return (
      <>
        <footer className="footer">
          <span className='todo-count'>{`${activeTasks} item left`}</span>
          <TaskFilter
            filterCompleted={filterCompleted}
            filterActive={filterActive}
            filterAll={filterAll}
          />
          <button className='clear-completed'>Clear completed</button>
        </footer>
      </>
    )
  }
}