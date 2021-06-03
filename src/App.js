import React from "react";

import "./components/Todo.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
const todoItems = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      //state variable
      todoItems: todoItems,
    };
  }
  //class methods to update state
  toggleItem = (itemId) => {
    //map over the array
    //when we find the item clicked toggle the completed
    const updatedTodo = this.state.todoItems.map((item) => {
      if (itemId === item.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    console.log("updated todo array", updatedTodo);

    this.setState({ ...this.state, todoItems: updatedTodo });
  };

  addItem = (itemName) => {
    this.setState({
      ...this.state,
      todoItems: [
        ...this.state.todoItems,
        { task: itemName, id: Date.now(), completed: false },
      ],
    });
  };

  clearTodo = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todoItems: this.state.todoItems.filter((item) => !item.completed),
    });
  };
  render() {
    return (
      <div>
        <h1>To-Do</h1>
        <TodoForm addItem={this.addItem} />
        <TodoList
          clearTodo={this.clearTodo}
          toggleItem={this.toggleItem}
          todoItems={this.state.todoItems}
        />
      </div>
    );
  }
}

export default App;
