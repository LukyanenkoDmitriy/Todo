import React, { useState } from "react";
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
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Min"
        required
        min={0}
        max={60}
      />
      <input
        type="number"
        className="new-todo-form__timer"
        placeholder="Sec"
        required
        min={0}
        max={60}
      />
      <button type="submit" onClick={addTask}></button>
    </form>
  );
}
