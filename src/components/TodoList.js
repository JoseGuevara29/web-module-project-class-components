// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  console.log(props.todoItems);

  return (
    <div className="items-list">
      {props.todoItems.map((item) => (
        <Todo toggleItem={props.toggleItem} key={item.id} item={item} />
      ))}
      <button onClick={props.clearTodo} className="clear-btn">
        Clear Todo Item
      </button>
    </div>
  );
};

export default TodoList;
