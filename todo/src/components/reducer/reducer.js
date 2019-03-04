import { ADD_TODO } from "../action/action";
const initialState = {
  todos: [
    {
      todo: {
        value: "",
        completed: false
      }
    }
  ]
};

export const reducer = (state = initialState, action) => {
  console.log("inside reducer", action);

  switch (action.type) {
    case ADD_TODO:
      return {};
  }
};
