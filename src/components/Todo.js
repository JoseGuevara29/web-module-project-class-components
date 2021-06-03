import React from "react";

const Todo = (props) => {
  console.log(props.item);
  return (
    <div
      onClick={() => props.toggleItem(props.item.id)}
      className={`item${props.item.completed ? " completed" : ""}`}
    >
      <p className="itemName">{props.item.task}</p>
    </div>
  );
};

export default Todo;
