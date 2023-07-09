import React, { Component } from 'react';

export default class NewTaskForm extends Component {
  state = {
    label: ''
  };

  handleChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='new-todo'
          type="text"
          placeholder="What needs to be done?"
          onChange={this.handleChange}
          value={this.state.label}
        />
      </form>
    );
  }
}