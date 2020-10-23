import React, { useContext } from "react";
import { TasksContext } from "../data/TasksContext";

const ButtonDelete = (props) => {
  const { deleteTasks } = useContext(TasksContext);

  const handleClick = () => {
    deleteTasks(props.id);
  };

  return (
    <button className="task__delete" onClick={handleClick}>
      Delete
    </button>
  );
};

export default ButtonDelete;
