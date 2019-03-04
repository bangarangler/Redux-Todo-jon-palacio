export const ADD_TODO = "ADD_TODO";

export const addTodo = state => {
  console.log("in action creater: ", state);

  return {
    type: ADD_TODO,
    payload: state
  };
};
