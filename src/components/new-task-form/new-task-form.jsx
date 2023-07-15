import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export default function NewTaskForm({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function addTask(e) {
    e.preventDefault();
    if (value) {
      setTodo([
        {
          id: uuidv4(),
          title: value,
          completed: false,
        },
        ...todo,
      ]);
      setValue("");
    } else alert("Please enter a task");
  }

  return (
    <form className="new-todo-form ">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        required
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" onClick={addTask}></button>
    </form>
  );
}

NewTaskForm.defaultProps = {
  todo: [],
  setTodo: () => {},
};

NewTaskForm.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.object),
  setTodo: PropTypes.func,
};
