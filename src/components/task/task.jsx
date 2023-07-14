import React, { useState } from "react";

export default function Task({
  todo,
  setTodo,
  id,
  title,
  completed,
  onDeleteTask,
  onCompleteTask,
}) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  let classNames = "description";

  completed ? (classNames += " completed") : (classNames += "");

  function onEditTask(id, title) {
    setEdit(id);
    setValue(title);
  }
  function saveTask(id) {
    let newTodo = todo.map((task) => {
      if (task.id === id) {
        return { ...task, title: value };
      } else {
        return task;
      }
    });
    setTodo(newTodo);
    setEdit(null);
  }
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => onCompleteTask(id)}
      />
      {edit === id ? (
        <label>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button type="button" onClick={() => saveTask(id)}>
            Save
          </button>
        </label>
      ) : (
        <label>
          <span className={classNames} onClick={() => onCompleteTask(id)}>
            {title}
          </span>
        </label>
      )}

      {edit === id ? (
        <div></div>
      ) : (
        <div>
          <button
            className="icon icon-edit"
            onClick={() => onEditTask(id, title)}
          />
          <button
            className="icon icon-destroy"
            onClick={() => onDeleteTask(id)}
          />
        </div>
      )}
    </div>
  );
}
