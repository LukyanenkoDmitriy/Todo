import React, { Component } from 'react';

import Task from '../task'

export default class TaskList extends Component {
  render() {
    const { todos, onDeleted, onCompleted } = this.props;
    const elements = todos.map((todo) => {
      const { id, ...taskProps } = todo;
      return (
        <li key={id}>
          <Task
            {...taskProps}
            onDeleted={() => onDeleted(id)}
            onCompleted={() => onCompleted(id)}
          />
        </li>
      )
    })
    return (
      <ul className='todo-list'>
        {elements}
      </ul>
    )
  }
}