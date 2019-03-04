import React, { Component } from "react";

import Todos from "./components/Todos/Todos";
import TodoForm from "./components/TodoForm/TodoForm";

import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <TodoForm />
        <Todos />
      </div>
    );
  }
}

export default App;
