import React, { createContext, useState, useEffect } from "react";
import uuid from "react-uuid";

export const TaskListContext = createContext();

const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

const TaskListContextProvider = (props) => {
  const [tasks, setTask] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  const addTask = (title) => {
    setTask([...tasks, { title, id: uuid() }]);
  };

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  const clearTask = () => {
    setTask([]);
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTask = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTask(newTask);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        clearTask,
        removeTask,
        findItem,
        editItem,
        editTask,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};
export default TaskListContextProvider;
