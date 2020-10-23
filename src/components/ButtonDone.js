import React, { useContext } from "react";
import { TasksContext } from "../data/TasksContext";

const ButtonDone = (props) => {
  const { doneTasks } = useContext(TasksContext);

  const handleClick = () => {
    doneTasks(props.id);
  };

  return (
    <button className="task__done" onClick={handleClick}>
      Done
    </button>
  );
};

export default ButtonDone;
