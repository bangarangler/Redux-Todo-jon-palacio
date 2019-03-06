import React from "react";

import { connect } from "react-redux";
import { addTodo } from "../action/action.js";

const uuid4 = require("uuid4");

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        value: "",
        completed: false,
        id: uuid4()
      }
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      todo: { ...prevState.todo, [e.target.name]: e.target.value }
    }));
  };

  //addTodo = e => {
  //e.preventDefault();
  //this.props.addTodo(this.state.todo);
  //this.setState({ todo: { value: "", completed: false } });
  //};

  addTodo = e => {
    //debugger;
    e.preventDefault();
    const newTodo = this.state.todo;
    this.props.addTodo(newTodo);
    this.setState({ todo: { value: "", comleted: false, id: uuid4() } });
  };

  render() {
    return (
      <form onSubmit={this.addTodo}>
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

const mapStateToProps = state => ({});

//export default connect(
//mapStateToProps,
//{ ADD_TODO, addTodo }
//)(TodoForm);
//
export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
