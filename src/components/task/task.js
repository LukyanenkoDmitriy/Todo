import React, { Component } from 'react';

export default class Task extends Component {
  render() {
    const { id, label, isCompleted, isChecked, onDeleted, onCompleted } = this.props;
    let classNames = "description"

    if (isCompleted) {
      classNames += " completed"
    }
    return (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isChecked}
          onChange={onCompleted}
        />
        <label>
          <span
            className={classNames}
            onClick={onCompleted}
          >{label}</span>
        </label>
        <button className="icon icon-edit" />
        <button
          className="icon icon-destroy"
          onClick={onDeleted}
        />
      </div>
    );
  }
}
