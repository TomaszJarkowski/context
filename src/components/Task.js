import React from "react";
import "./Task.css";
import ButtonDelete from "./ButtonDelete";
import ButtonDone from "./ButtonDone";
const Task = ({ task }) => {
  return (
    <>
      <div
        className="task"
        key={task.id}
        style={task.done ? { backgroundColor: "#38EF7D" } : null}
      >
        <div className="task__title">{task.title}</div>
        <div className="task__text">{task.text}</div>
        <div className="task__buttons">
          <ButtonDelete id={task.id}>Delete</ButtonDelete>
          <ButtonDone id={task.id}>Done</ButtonDone>
        </div>
      </div>
    </>
  );
};

export default Task;
