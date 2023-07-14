import React from "react";

import TaskFilter from "../task-filter/task-filter.jsx";

export default function Footer({ filterTasks, activeTasks, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{`${activeTasks} item left`}</span>
      <TaskFilter filterTasks={filterTasks} />
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
}
