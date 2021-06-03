import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChanges = (e) => {
    //update state with each keystroke
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  submitItem = (e) => {
    e.preventDefault(); // avoid a total refresh of the app (default HTML form behavior on submit)
    // pass this.state.newItem into a method that updates application-level state
    this.props.addItem(this.state.item);
  };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          value={this.state.item}
          onChange={this.handleChanges}
          type="text"
          name="item"
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
