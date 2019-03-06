import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../action/action";
const initialState = {
  todos: []
};

export const reducer = (state = initialState, action) => {
  console.log("inside reducer", action);

  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_TODO:
      let newTodosArray = state.todos.map(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });

      return {
        todos: newTodosArray
      };
    case REMOVE_TODO:
      let filteredTodo = state.todos.filter(t => {
        if (t.id === !action.payload) {
          return t;
        }
        return null;
      });
      return {
        todos: filteredTodo
      };
    default:
      return state;
  }
};
