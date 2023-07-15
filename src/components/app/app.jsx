import React, { useState, useEffect } from "react";
import "../../main.css";
import "../../additional.css";

import Footer from "../footer/footer";
import NewTaskForm from "../new-task-form/new-task-form";
import TaskList from "../task-list/task-list";

export default function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "First task",
      completed: false,
    },
    {
      id: 2,
      title: "Second task",
      completed: true,
    },
    {
      id: 3,
      title: "Third task",
      completed: false,
    },
  ]);
  const [filtered, setFiltered] = useState(todo);
  const activeTasks = todo.filter((task) => !task.completed).length;
  useEffect(() => {
    setFiltered(todo);
  }, [todo]);

  function filterTasks(filter) {
    if (filter === "all") {
      setFiltered(todo);
    } else {
      let newTodo = [...todo].filter((item) => item.completed !== filter);
      setFiltered(newTodo);
    }
  }

  function clearCompleted() {
    let newTodo = [...todo].filter((item) => !item.completed);
    setTodo(newTodo);
  }

  return (
    <>
      <header>
        <h1>Todos</h1>
      </header>
      <NewTaskForm todo={todo} setTodo={setTodo} />
      <TaskList
        todo={todo}
        setTodo={setTodo}
        title={todo.title}
        filtered={filtered}
      />
      <Footer
        filterTasks={filterTasks}
        activeTasks={activeTasks}
        clearCompleted={clearCompleted}
      />
    </>
  );
}
