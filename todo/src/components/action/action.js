export const ADD_TODO = "ADD_TODO";

export const addTodo = newTodo => {
  console.log("in action creater: ", newTodo);

  return {
    type: ADD_TODO,
    payload: newTodo
  };
};
