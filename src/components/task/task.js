import React, { Component } from 'react';

export default class Task extends Component {

  state = {
    completed: false,
    isChecked: false,
  }

  isComleted = () => {
    this.setState(({ completed, isChecked }) => {
      return {
        completed: !completed,
        isChecked: !isChecked,
      }
    })

  }

  render() {
    const { label, onDeleted } = this.props;
    const { completed, isChecked } = this.state;
    let classNames = "description"

    if (completed) {
      classNames += " completed"
    }
    return (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isChecked}
          onChange={this.isComleted}
        />
        <label>
          <span
            className={classNames}
            onClick={this.isComleted}
          >{label}</span>
        </label>
        <button className="icon icon-edit" />
        <button
          className="icon icon-destroy"
          onClick={onDeleted}
        />
      </div>
    )
  }
}


