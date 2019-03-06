export const ADD_TODO = "ADD_TODO";

export const addTodo = newTodo => {
  console.log("in action creater: ", newTodo);

  return {
    type: ADD_TODO,
    payload: newTodo
  };
};

export const TOGGLE_TODO = "TOGGLE_TODO";

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};

export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    payload: id
  };
};
