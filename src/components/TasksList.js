import React, { useContext } from "react";
import Task from "./Task.js";
import { TasksContext } from "../data/TasksContext";

const TasksList = () => {
  const { tasks } = useContext(TasksContext);
  return tasks.map((el) => <Task task={el} key={el.id} />);
};

export default TasksList;
