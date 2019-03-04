import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        value: "",
        completed: false
      }
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      ...prevState,
      todo: { [e.target.name]: e.target.value }
    }));
  };

  //handleSubmit = e => {};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Todo ..."
          name="value"
          value={this.state.todo.value}
          onChange={this.handleChange}
        />
        <p>{JSON.stringify(this.state.todo.value)}</p>
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
