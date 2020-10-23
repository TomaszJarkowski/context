import React, { createContext, useState } from "react";

export const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasksNumbers, setTasksNumbers] = useState(0);
  const [tasks, setTasks] = useState([]);

  const addTasks = (task) => {
    setTasks([...tasks, task]);
    setTasksNumbers(tasksNumbers + 1);
  };

  const deleteTasks = (id) => {
    const filterTasks = tasks.filter((el) => el.id !== id);
    setTasks(filterTasks);
    setTasksNumbers(tasksNumbers - 1);
  };

  const doneTasks = (id) => {
    const searchTask = tasks.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          done: true,
        };
      }
      return el;
    });
    setTasks(searchTask);
  };

  return (
    <TasksContext.Provider
      value={{ tasksNumbers, tasks, addTasks, deleteTasks, doneTasks }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
