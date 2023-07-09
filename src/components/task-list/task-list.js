import React, { Component } from 'react';
import Task from '../task';

export default class TaskList extends Component {
  render() {
    const { filteredTasks, onDeleted, onCompleted } = this.props;
    const elements = filteredTasks.map((todo) => {
      const { id, label, isCompleted, isChecked } = todo;
      return (
        <li key={id}>
          <Task
            id={id}
            label={label}
            isCompleted={isCompleted}
            isChecked={isChecked}
            onDeleted={() => onDeleted(id)}
            onCompleted={() => onCompleted(id)}
          />
        </li>
      );
    });
    return <ul className='todo-list'>{elements}</ul>;
  }
}