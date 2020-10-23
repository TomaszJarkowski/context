import React, { useContext } from "react";
import "./NumberOfTasks.css";
import { TasksContext } from "../data/TasksContext";
const NumberOfTasks = () => {
  const { tasksNumbers } = useContext(TasksContext);
  return <div className="numberOfTasks">{tasksNumbers}</div>;
};

export default NumberOfTasks;
