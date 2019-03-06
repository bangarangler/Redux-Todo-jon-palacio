import React from "react";

import { connect } from "react-redux";

import Todo from "../Todo/Todo";

const todos = props => {
  //debugger;
  return (
    <ul>
      {props.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  //debugger;
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(todos);
