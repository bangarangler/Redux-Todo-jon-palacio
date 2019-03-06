import React from "react";
import { connect } from "react-redux";

import { toggleTodo, removeTodo } from "../action/action.js";

import styles from "./Todo.module.scss";
//import "./Todo.css";

const todo = props => {
  //debugger;
  return (
    <>
      <li
        onClick={() => props.toggleTodo(props.todo.id)}
        className={props.todo.completed ? styles.Todo : "not"}
      >
        {props.todo.value}
      </li>
      <button onClick={() => props.removeTodo(props.todo.id)}>Delete</button>
    </>
  );
};

const mapStateToProps = state => {
  return { state };
};


export default connect(
  mapStateToProps,
  { toggleTodo, removeTodo }
)(todo);
